const Program = require('../models/program');

exports.createProgram = async (req, res) => {
  try {
    const program = await Program.create(req.body);
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPrograms = async (req, res) => {
  const programs = await Program.findAll();
  res.json(programs);
};