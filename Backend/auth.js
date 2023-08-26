const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    console.log("the token is ", token);
    if (!token) {
      return res.status(403).json({ status: 'error', message: 'No token provided' });
    }
  
    jwt.verify(token, 'secret123', (err, decoded) => {
      if (err) {
        return res.status(500).json({ status: 'error', message: 'Failed to authenticate token' });
      }
      req.user = decoded;
      next();
    });
  }
  
  function verifyAdminToken (req, res, next) {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(403).json({ message: "No token provided" });
    }
  
    jwt.verify(token, 'adminSecret123', (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }
  
      if (decodedToken.username !== "admin") {
        return res.status(403).json({ message: "Unauthorized" });
      }
  
      req.admin = decodedToken;
      next();
    });
  };

  module.exports = {
    verifyToken,
    verifyAdminToken,
  };
