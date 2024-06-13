"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoDeEjercicioRouter = void 0;
const express_1 = require("express");
const tipoDeEjercicioController_1 = require("../Controllers/tipoDeEjercicioController");
const router = (0, express_1.Router)();
exports.tipoDeEjercicioRouter = router;
router.get('/', tipoDeEjercicioController_1.getAllTiposDeEjercicio);
router.post('/', tipoDeEjercicioController_1.createTipoDeEjercicio);
