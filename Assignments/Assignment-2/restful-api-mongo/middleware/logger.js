// middleware/logger.js
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl}`);
    next(); // continue to next middleware or route handler
  };
  
  module.exports = logger;
  