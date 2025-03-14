import { sequelize } from '../db/conexion.js';
import { DataTypes } from 'sequelize';
export const UserModel = sequelize.define('Users', {
    // Los atributos del modelo se definen aquí
    id: {
      //tipo de dato
      type: DataTypes.INTEGER,
      //autoincremento
      autoIncrement: true,
      //clave primaria 
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING, 
      //no permitir valores nulos
      allowNull: false 
    },
    lastName: {
      type: DataTypes.STRING
    }
    
  }, {
    // Para desactivar los campos createdAt y updatedAt que sequelize genera por defecto para cada modelo lo desactivamos de la siguiente línea de código
    timestamps: false
  });