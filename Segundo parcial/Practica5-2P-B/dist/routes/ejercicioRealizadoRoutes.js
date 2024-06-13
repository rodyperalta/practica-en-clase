"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejercicioRealizadoRouter = void 0;
const express_1 = require("express");
const ejercicioRealizadoController_1 = require("../Controllers/ejercicioRealizadoController");
const router = (0, express_1.Router)();
exports.ejercicioRealizadoRouter = router;
router.get('/', ejercicioRealizadoController_1.getAllEjercicios);
router.post('/', ejercicioRealizadoController_1.createEjercicio);
