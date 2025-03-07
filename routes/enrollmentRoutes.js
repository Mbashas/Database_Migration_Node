// routes/enrollmentRoutes.js

const express = require('express');
const router = express.Router();
const { Enrollment } = require('../models');

// CREATE an enrollment (linking a student to a course)
router.post('/enrollment', async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ all enrollments
router.get('/enrollment', async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ a single enrollment by ID
router.get('/enrollment/:id', async (req, res) => {
  try {
    const enrollment = await Enrollment.findByPk(req.params.id);
    if (enrollment) res.json(enrollment);
    else res.status(404).json({ message: 'Enrollment not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE an enrollment by ID
router.put('/enrollment/:id', async (req, res) => {
  try {
    const [updated] = await Enrollment.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedEnrollment = await Enrollment.findByPk(req.params.id);
      res.status(200).json(updatedEnrollment);
    } else {
      res.status(404).json({ message: 'Enrollment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE an enrollment by ID
router.delete('/enrollment/:id', async (req, res) => {
  try {
    const deleted = await Enrollment.destroy({ where: { id: req.params.id } });
    if (deleted) res.status(200).json({ message: 'Enrollment deleted' });
    else res.status(404).json({ message: 'Enrollment not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;