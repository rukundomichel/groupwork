import express from 'express'
import {registerUser, loginUser,logoutUser} from '../controllers/userController.js'
const userroute= express.Router();

userroute.post("/register",registerUser)
userroute.post("/login",loginUser)
userroute.post("/logout",logoutUser)

export default userroute;