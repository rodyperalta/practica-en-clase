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
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// Obtener todos los ejercicios realizados activos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ejercicios = yield prisma.ejercicio_realizado.findMany({
            where: { Estado: 'Activo' }
        });
        res.json(ejercicios);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
// Obtener un ejercicio realizado por ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ejercicio = yield prisma.ejercicio_realizado.findUnique({
            where: { id: parseInt(id), Estado: 'Activo' }
        });
        if (ejercicio) {
            res.json(ejercicio);
        }
        else {
            res.status(404).json({ error: 'Ejercicio no encontrado' });
        }
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
// Crear un nuevo ejercicio realizado
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Idtipoejercicio, Iddeportista, Fecha, Hora, Tiempo_transcurrido, Calorias_quemadas } = req.body;
    try {
        const nuevoEjercicio = yield prisma.ejercicio_realizado.create({
            data: {
                Idtipoejercicio,
                Iddeportista,
                Fecha,
                Hora,
                Tiempo_transcurrido,
                Calorias_quemadas,
                Estado: 'Activo'
            }
        });
        res.status(201).json(nuevoEjercicio);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
// Actualizar un ejercicio realizado por ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
        const ejercicio = yield prisma.ejercicio_realizado.update({
            where: { id: parseInt(id) },
            data: datosActualizados
        });
        res.json(ejercicio);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
// Eliminar (lógicamente) un ejercicio realizado por ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const ejercicio = yield prisma.ejercicio_realizado.update({
            where: { id: parseInt(id) },
            data: { Estado: 'Eliminado' }
        });
        res.json(ejercicio);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
exports.default = router;
