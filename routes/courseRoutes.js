// routes/courseRoute.js

const express = require('express');
const router = express.Router();
const { Course } = require('../models');

// CREATE a new course
router.post('/', async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ all courses
router.get('/course', async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ a single course by ID
router.get('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (course) res.json(course);
    else res.status(404).json({ message: 'Course not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE a course by ID
router.put('/course/:id', async (req, res) => {
  try {
    const [updated] = await Course.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedCourse = await Course.findByPk(req.params.id);
      res.status(200).json(updatedCourse);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a course by ID
router.delete('/course/:id', async (req, res) => {
  try {
    const deleted = await Course.destroy({ where: { id: req.params.id } });
    if (deleted) res.status(200).json({ message: 'Course deleted' });
    else res.status(404).json({ message: 'Course not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;