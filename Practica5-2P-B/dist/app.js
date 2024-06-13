"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const models_1 = require("./models"); // Importar la configuración de Sequelize
const ejercicioRealizadoRoutes_1 = require("./routes/ejercicioRealizadoRoutes");
const tipoDeEjercicioRoutes_1 = require("./routes/tipoDeEjercicioRoutes");
const deportistaRoutes_1 = require("./routes/deportistaRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Configurar las rutas
app.use('/ejercicios', ejercicioRealizadoRoutes_1.ejercicioRealizadoRouter);
app.use('/tipos-ejercicio', tipoDeEjercicioRoutes_1.tipoDeEjercicioRouter);
app.use('/deportistas', deportistaRoutes_1.deportistaRouter);
// Sincronizar modelos de Sequelize con la base de datos
models_1.sequelize.sync().then(() => {
    console.log('Base de datos sincronizada con Sequelize');
    // Iniciar el servidor
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error al sincronizar la base de datos con Sequelize: ', error);
});
