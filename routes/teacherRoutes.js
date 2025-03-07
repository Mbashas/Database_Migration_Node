// routes/teacherRoute.js

const express = require('express');
const router = express.Router();
const { Teacher } = require('../models');

// CREATE a new teacher
router.post('/teacher', async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ all teachers
router.get('/teacher', async (req, res) => {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ a teacher by ID
router.get('/teacher/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findByPk(req.params.id);
    if (teacher) res.json(teacher);
    else res.status(404).json({ message: 'Teacher not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE a teacher by ID
router.put('/teacher/:id', async (req, res) => {
  try {
    const [updated] = await Teacher.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const updatedTeacher = await Teacher.findByPk(req.params.id);
      res.status(200).json(updatedTeacher);
    } else {
      res.status(404).json({ message: 'Teacher not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a teacher by ID
router.delete('/teacher/:id', async (req, res) => {
  try {
    const deleted = await Teacher.destroy({ where: { id: req.params.id } });
    if (deleted) res.status(200).json({ message: 'Teacher deleted' });
    else res.status(404).json({ message: 'Teacher not found' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;