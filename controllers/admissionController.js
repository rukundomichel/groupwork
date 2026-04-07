// controllers/admissionController.js
const Admission = require('../models/Admission');

// CREATE
const createAdmission = async (req, res) => {
  try {
    const { student_id, program_id, admission_date } = req.body;

    if (!student_id || !program_id) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const admission = await Admission.create({
      student_id,
      program_id,
      admission_date
    });

    res.status(201).json({
      message: 'Admission created successfully',
      data: admission
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.findAll();
    res.status(200).json(admissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
const getAdmissionById = async (req, res) => {
  try {
    const { id } = req.params;

    const admission = await Admission.findByPk(id);

    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' });
    }

    res.status(200).json(admission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteAdmission = async (req, res) => {
  try {
    const { id } = req.params;

    const admission = await Admission.findByPk(id);

    if (!admission) {
      return res.status(404).json({ message: 'Admission not found' });
    }

    await admission.destroy();

    res.status(200).json({
      message: 'Admission deleted successfully'
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAdmission,
  getAllAdmissions,
  getAdmissionById,
  deleteAdmission
};