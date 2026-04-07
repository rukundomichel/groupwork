import express from 'express'
import { createAdmission, getAllAdmissions, getAdmissionById, deleteAdmission } from '../controllers/admissionController.js'
const router = express.Router();

router.post("/", createAdmission);
router.get("/", getAllAdmissions);
router.get("/:id", getAdmissionById);
router.delete("/:id", deleteAdmission);

export default router;