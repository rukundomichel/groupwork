import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
const intake= sequelize.define("Intake",{
    intake_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    intake_name:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    start_date:{
        type:DataTypes.DATE,
        allowNull:false,
   
    },
    end_date:{
        type:DataTypes.DATE,
        allowNull:false,

    },
},{tableName:"intake", timestamps:true})

export default intake;
