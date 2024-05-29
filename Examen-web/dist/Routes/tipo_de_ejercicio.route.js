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
// Obtener todos los tipos de ejercicio activos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipos = yield prisma.tipo_de_ejercicio.findMany({
            where: { Estado: 'Activo' }
        });
        res.json(tipos);
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
// Obtener un tipo de ejercicio por ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tipo = yield prisma.tipo_de_ejercicio.findUnique({
            where: { id: parseInt(id), Estado: 'Activo' }
        });
        if (tipo) {
            res.json(tipo);
        }
        else {
            res.status(404).json({ error: 'Tipo de ejercicio no encontrado' });
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
// Crear un nuevo tipo de ejercicio
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipo_de_ejercicio } = req.body;
    try {
        const nuevoTipo = yield prisma.tipo_de_ejercicio.create({
            data: {
                tipo_de_ejercicio,
                Estado: 'Activo'
            }
        });
        res.status(201).json(nuevoTipo);
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
//Actualizar un tipo de ejercicio por ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
        const tipo = yield prisma.tipo_de_ejercicio.update({
            where: { id: parseInt(id) },
            data: datosActualizados
        });
        res.json(tipo);
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
//Eliminar un tipo de ejercicio por ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tipo = yield prisma.tipo_de_ejercicio.update({
            where: { id: parseInt(id) },
            data: { Estado: 'Eliminado' }
        });
        res.json(tipo);
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
