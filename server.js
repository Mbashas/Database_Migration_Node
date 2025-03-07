const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

// Route endpoints (updated to use the API without adding extra prefixes)
app.use('/', studentRoutes);
app.use('/', courseRoutes);
app.use('/', teacherRoutes);
app.use('/', enrollmentRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});