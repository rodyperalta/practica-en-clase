"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tipoDeEjercicioRouter = exports.ejercicioRealizadoRouter = exports.deportistaRouter = void 0;
const deportista_route_1 = __importDefault(require("./deportista.route"));
exports.deportistaRouter = deportista_route_1.default;
const ejercicio_realizado_route_1 = __importDefault(require("./ejercicio_realizado.route"));
exports.ejercicioRealizadoRouter = ejercicio_realizado_route_1.default;
const tipo_de_ejercicio_route_1 = __importDefault(require("./tipo_de_ejercicio.route"));
exports.tipoDeEjercicioRouter = tipo_de_ejercicio_route_1.default;
