import express from 'express'
import intakeroute from './routes/intakeRoute.js'
import userroute from './routes/userRoute.js'
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
app.use("/api/auth",userroute);
app.use("/api/intake",intakeroute);

app.listen(2000,()=>{
    console.log("Listen to port 2000");
})
