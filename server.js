require('dotenv').config();
const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

// Middleware (if any)
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// Export the app for testing
module.exports = app;

// Start the server ONLY if NOT in test environment
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}
