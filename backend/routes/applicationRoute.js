import express from "express";
import { getAllApplications, getApplicationById, updateApplication, deleteApplication } from "../controllers/applicationController";
const router = express.Router();

router.post("/create",  createApplication);
router.get("/", getAllApplications);
router.get("/:id", getApplicationById);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

module.exports = router;