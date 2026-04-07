const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your database connection

const Student = sequelize.define('Student', {
  student_id: { type: DataTypes.INTEGER, primary_key: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  phone: { type: DataTypes.STRING }
}, { timestamps: false });

module.exports = Student;