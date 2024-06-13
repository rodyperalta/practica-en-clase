"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// models/Deportista.ts
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Deportista = database_1.default.define('Deportista', {
    id: { type: sequelize_1.DataTypes.UUID, primaryKey: true, defaultValue: sequelize_1.DataTypes.UUIDV4 },
    Estado: { type: sequelize_1.DataTypes.STRING, defaultValue: 'Activo' },
    nombre: { type: sequelize_1.DataTypes.STRING },
    peso: { type: sequelize_1.DataTypes.STRING },
    altura: { type: sequelize_1.DataTypes.INTEGER },
    edad: { type: sequelize_1.DataTypes.INTEGER },
});
exports.default = Deportista;
