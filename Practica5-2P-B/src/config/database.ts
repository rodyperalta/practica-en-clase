// config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_practica3, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

export default sequelize;
