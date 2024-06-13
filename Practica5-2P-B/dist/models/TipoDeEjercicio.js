"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/TipoDeEjercicio.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const TipoDeEjercicio = database_1.default.define('TipoDeEjercicio', {
    id: { type: sequelize_1.DataTypes.UUID, primaryKey: true, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    Estado: { type: sequelize_1.DataTypes.STRING, defaultValue: 'Activo' },
    tipo_de_ejercicio: { type: sequelize_1.DataTypes.STRING },
});
exports.default = TipoDeEjercicio;
