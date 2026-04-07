import Intake from "../model/intakesModel.js";

export async function registerIntake(req,res){
    try {
        const{intake_name, start_date,end_date}= req.body;
        const findIntake= await Intake.findOne({where:{intake_name}})
        if(findIntake) return res.status(400).json({message:"Intake Already exists"})
        const intake= await Intake.create({intake_name, start_date,end_date})
        res.status(201).json("Intake created successfully",intake)
    } catch (error) {
        console.error("Error Occured when registeroing intake",error)
        res.status(500).json({message:"Internal server error"})
    }
}