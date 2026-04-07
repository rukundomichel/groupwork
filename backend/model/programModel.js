const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Program = sequelize.define('Program', {
  program_id: { type: DataTypes.INTEGER, primary_key: true, autoIncrement: true },
  program_name: { type: DataTypes.STRING, allowNull: false }
}, { timestamps: false });

module.exports = Program;
