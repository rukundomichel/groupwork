import express from 'express'
import intakeroute from './routes/intakeRoute.js'
import userroute from './routes/userRoute.js'
import applicationRoutes from './routes/applicationRoute.js'
import admissionRoutes from './routes/admissionRoute.js'
 import programRoutes from './routes/programRoute.js'
 import studentRoute from './routes/studentRoute.js'

import session from 'express-session'
import cors from 'cors'
import { connectdb } from './config/db.js'
const app= express();
app.use(express.json());
connectdb();

app.use(cors({
    origin:"http://localhost:2000",
    credentials:true
}));
app.use(session({
    secret:"My secret key",
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false}
}))

app.use('/applications', applicationRoutes);
app.use('/admissions', admissionRoutes);
app.use('/programs', programRoutes);
app.use("/auth",userroute);
app.use("/intake",intakeroute);
app.use("/student",studentRoute);

app.listen(2000,()=>{
    console.log("Listen to port 2000");
})
