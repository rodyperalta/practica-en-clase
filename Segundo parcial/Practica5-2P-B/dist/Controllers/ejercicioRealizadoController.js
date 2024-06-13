"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEjercicio = exports.getAllEjercicios = void 0;
const repositories_1 = require("../repositories/repositories");
const getAllEjercicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ejercicios = yield (0, repositories_1.getEjerciciosRealizados)();
    res.json(ejercicios);
});
exports.getAllEjercicios = getAllEjercicios;
const createEjercicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nuevoEjercicio = yield (0, repositories_1.createEjercicioRealizado)(req.body);
    res.json(nuevoEjercicio);
});
exports.createEjercicio = createEjercicio;
