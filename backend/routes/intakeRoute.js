import express from 'express'
import {registerIntake} from '../controllers/intakeController.js'
const intakeroute= express.Router();

intakeroute.post("/register",registerIntake)

export default intakeroute;