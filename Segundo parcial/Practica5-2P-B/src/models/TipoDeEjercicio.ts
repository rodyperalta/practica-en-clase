// models/TipoDeEjercicio.ts
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const TipoDeEjercicio = sequelize.define('TipoDeEjercicio', {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  Estado: { type: DataTypes.STRING, defaultValue: 'Activo' },
  tipo_de_ejercicio: { type: DataTypes.STRING },
});

export default TipoDeEjercicio;
