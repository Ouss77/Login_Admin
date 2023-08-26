const express = require("express");
const app = express();
const cnx = require("./dbconfig/db");
const User = require("./models/models");
const jwt = require('jsonwebtoken')
const {verifyAdminToken, verifyToken} = require('./auth'); // Replace './auth' with the correct path to your middleware file

const cors = require("cors");
const port = 3005; // You can change the port number if needed

app.use(cors())

// Middleware: We will parse a JSON file
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.post("/register", async (req, res) => {
    console.log('here is the body sent in the request', req.body);
    const { username, email, password } = req.body;
    try {
      await User.create({ username, email, password });
      res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
      console.error("Error inserting user", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const exist = await User.findOne({ username, password });
    if (exist) {
      const token = jwt.sign({
        username: exist.username,
        email: exist.email,
        scores: exist.scores,
      }, 'secret123');
      return res.json({ status: "ok", user: token });
    } else {
      return res.json({ status: "error", user: false });
    }
  } catch (err) {
    console.error("Error finding user", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
// This route will be used to log in as an admin and get an access token
app.post("/admin/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Replace this with your actual admin credentials check
    if (username === "admin" && password === "admin") {
      const token = jwt.sign({ username: "admin" }, 'adminSecret123');
      return res.json({ status: "ok", admin: token });
    } else {
      return res.json({ status: "error", admin: false });
    }
  } catch (err) {
    console.error("Error logging in as admin", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/scores", verifyToken, async (req, res) => {
  // The middleware function 'verifyToken' will be executed before this route handler

  try {
    const decodedToken = req.user;
    console.log("decoded token", decodedToken);

    const user = await User.findOne({ username: decodedToken.username });

    if (user) {
      user.scores = req.body.score;
      await user.save();

      // Return updated user information in response
      return res.json({
        status: "ok",
        username: user.username,
        email: user.email,
        score: user.scores,
      });
    } else {
      return res.json({ status: "error", message: "User not found" });
    }
  } catch (error) {
    console.error("Error updating score:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

app.get("/admin/users", verifyAdminToken, async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude password from the result

    if (users) {
      return res.json({
        status: "ok",
        users: users,
      });
    } else {
      return res.json({ status: "error", message: "No users found" });
    }
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
});

// Protected route to fetch user information
app.get('/scores', verifyToken, async (req, res) => {
  try {
    const username = req.user.username;

    const user = await User.findOne({ username });

    if (user) {
      res.json({
        status: 'ok',
        username: user.username,
        email: user.email,
        score: user.scores
        // Include other user information here
      });
    } else {
      res.status(404).json({ status: 'error', message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user information:', error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// Verify Token Middleware



// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

