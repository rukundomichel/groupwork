const Student = require('../models/student');

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.findAll();
  res.json(students);
};