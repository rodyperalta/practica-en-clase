"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/EjercicioRealizado.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const EjercicioRealizado = database_1.default.define('EjercicioRealizado', {
    id: { type: sequelize_1.DataTypes.UUID, primaryKey: true, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    Estado: { type: sequelize_1.DataTypes.STRING, defaultValue: 'Activo' },
    Idtipoejercicio: { type: sequelize_1.DataTypes.UUID },
    Iddeportista: { type: sequelize_1.DataTypes.UUID },
    Fecha: { type: sequelize_1.DataTypes.STRING },
    Hora: { type: sequelize_1.DataTypes.STRING },
    Tiempo_transcurrido: { type: sequelize_1.DataTypes.STRING },
    Calorias_quemadas: { type: sequelize_1.DataTypes.STRING },
});
exports.default = EjercicioRealizado;
