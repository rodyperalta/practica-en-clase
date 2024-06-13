// models/EjercicioRealizado.ts
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const EjercicioRealizado = sequelize.define('EjercicioRealizado', {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  Estado: { type: DataTypes.STRING, defaultValue: 'Activo' },
  Idtipoejercicio: { type: DataTypes.UUID },
  Iddeportista: { type: DataTypes.UUID },
  Fecha: { type: DataTypes.STRING },
  Hora: { type: DataTypes.STRING },
  Tiempo_transcurrido: { type: DataTypes.STRING },
  Calorias_quemadas: { type: DataTypes.STRING },
});

export default EjercicioRealizado;
