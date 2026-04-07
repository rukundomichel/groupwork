import Intake from "../model/intakesModel.js";

export async function registerIntake(req, res) {
    try {
        const { intake_name, start_date, end_date } = req.body;
        if (!intake_name || !start_date || !end_date) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const findIntake = await Intake.findOne({
            where: {
                intake_name: intake_name.toLowerCase()
            }
        });

        if (findIntake) {
            return res.status(400).json({
                message: "Intake already exists"
            });
        }
        const intake = await Intake.create({
            intake_name: intake_name.toLowerCase(),
            start_date,
            end_date
        });
        res.status(201).json({
            message: "Intake created successfully",
            data: intake
        });

    } catch (error) {
        console.error("Error occurred when registering intake:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}