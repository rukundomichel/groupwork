import sequelize from "../../../../backend/config/db.js";
import { DataTypes } from "sequelize";

const user= sequelize.define("User",{
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
      
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
},{tableName:"user",timestamps:false})

export default user;
