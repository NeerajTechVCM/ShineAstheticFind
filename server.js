const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

// Routers
const AuthRouter = require('./controller/user-controller');
const ProductRouter = require('./controller/product-controller');
const authMiddleware = require('./middleware/authentication');

// Load environment variables in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Update this to your frontend domain in production
    credentials: true,
  })
);

// Routes
app.post('/register', AuthRouter.register);
app.post('/login', AuthRouter.login);
app.get('/getUsers', AuthRouter.getAllUsers);
app.post('/logout', AuthRouter.logoutUser);

app.post('/uploadProduct', ProductRouter.uploadProduct);
app.get('/getAllProducts', ProductRouter.getAllProducts);
app.delete('/deleteProduct/:id', ProductRouter.deleteProduct);
app.put('/editProduct/:id', ProductRouter.editProduct);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  const dirPath = path.resolve();
  app.use(express.static(path.join(dirPath, './frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirPath, 'frontend', 'dist', 'index.html'));
  });
}

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
