/*import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { ejercicioRealizadoRouter } from './routes/ejercicioRealizadoRoutes';
import { tipoDeEjercicioRouter } from './routes/tipoDeEjercicioRoutes';
import { deportistaRouter } from './routes/deportistaRoutes';

const app = express();
app.use(express.json());

// Configurar las rutas
app.use('/ejercicios', ejercicioRealizadoRouter);
app.use('/tipos-ejercicio', tipoDeEjercicioRouter);
app.use('/deportistas', deportistaRouter);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/

// app.ts
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { sequelize as sequelizeORM } from './models'; // Importar la configuración de Sequelize
import { ejercicioRealizadoRouter } from './routes/ejercicioRealizadoRoutes';
import { tipoDeEjercicioRouter } from './routes/tipoDeEjercicioRoutes';
import { deportistaRouter } from './routes/deportistaRoutes';

const app = express();
app.use(express.json());

// Configurar las rutas
app.use('/ejercicios', ejercicioRealizadoRouter);
app.use('/tipos-ejercicio', tipoDeEjercicioRouter);
app.use('/deportistas', deportistaRouter);

// Sincronizar modelos de Sequelize con la base de datos
sequelizeORM.sync().then(() => {
  console.log('Base de datos sincronizada con Sequelize');
  // Iniciar el servidor
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Error al sincronizar la base de datos con Sequelize: ', error);
});
