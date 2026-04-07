const express = require("express");
const router = express.Router();
import {  createApplication, 
    getAllApplications, 
    getApplicationById, 
    updateApplication, 
    deleteApplication 
} from '../controllers/applicationController';

router.post("/create",  createApplication);
router.get("/", getAllApplications);
router.get("/:id", getApplicationById);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

module.exports = router;