import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Intake = sequelize.define("Intake", {
    intake_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    intake_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isAfterStart(value) {
                if (value <= this.start_date) {
                    throw new Error("End date must be after start date");
                }
            }
        }
    }
}, {
    tableName: "intake",
    timestamps: true,
    freezeTableName: true
});

export default Intake;