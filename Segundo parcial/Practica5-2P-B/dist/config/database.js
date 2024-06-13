"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// config/database.ts
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
});
exports.default = sequelize;
