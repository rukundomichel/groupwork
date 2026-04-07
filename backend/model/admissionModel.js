import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Admission = sequelize.define('Admission', {
  admission_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  program_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  admission_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'admissions',
  timestamps: false
});

export default Admission;