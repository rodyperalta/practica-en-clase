// models/Deportista.ts
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Deportista = sequelize.define('Deportista', {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  Estado: { type: DataTypes.STRING, defaultValue: 'Activo' },
  nombre: { type: DataTypes.STRING },
  peso: { type: DataTypes.STRING },
  altura: { type: DataTypes.INTEGER },
  edad: { type: DataTypes.INTEGER },
});

export default Deportista;
