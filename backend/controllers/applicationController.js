// controllers/applicationController.js
const Application = require('../model/Application');

// CREATE
const createApplication = async (req, res) => {
  try {
    const { student_id, intake_id, program_id, status } = req.body;

    if (!student_id || !intake_id || !program_id) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const application = await Application.create({
      student_id,
      intake_id,
      program_id,
      status
    });

    res.status(201).json({
      message: 'Application created successfully',
      data: application
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.findAll();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { student_id, intake_id, program_id, status } = req.body;

    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    await application.update({
      student_id,
      intake_id,
      program_id,
      status
    });

    res.status(200).json({
      message: 'Application updated successfully',
      data: application
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findByPk(id);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    await application.destroy();

    res.status(200).json({
      message: 'Application deleted successfully'
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication
};