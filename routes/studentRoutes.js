// routes/students.js

const express = require('express');
const router = express.Router();

// Import the Student model from Sequelize models
const { Student } = require('../models');

// CREATE: Add a new student
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ: Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ: Get a student by ID
router.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE: Update a student's details
router.put('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Student.update(req.body, { where: { id } });
    if (updated) {
      const updatedStudent = await Student.findByPk(id);
      return res.status(200).json(updatedStudent);
    }
    throw new Error('Student not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Remove a student
router.delete('/students/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Student.destroy({ where: { id } });
    if (deleted) {
      return res.status(200).json({ message: 'Student deleted' });
    }
    throw new Error('Student not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;