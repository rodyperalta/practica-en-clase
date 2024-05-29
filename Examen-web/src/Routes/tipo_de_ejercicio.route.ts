import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Obtener todos los tipos de ejercicio activos
router.get('/', async (req: Request, res: Response) => {
    try {
        const tipos = await prisma.tipo_de_ejercicio.findMany({
            where: { Estado: 'Activo' }
        });
        res.json(tipos);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Obtener un tipo de ejercicio por ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tipo = await prisma.tipo_de_ejercicio.findUnique({
            where: { id: parseInt(id), Estado: 'Activo' }
        });
        if (tipo) {
            res.json(tipo);
        } else {
            res.status(404).json({ error: 'Tipo de ejercicio no encontrado' });
        }
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Crear un nuevo tipo de ejercicio
router.post('/', async (req: Request, res: Response) => {
    const { tipo_de_ejercicio } = req.body;
    try {
        const nuevoTipo = await prisma.tipo_de_ejercicio.create({
            data: {
                tipo_de_ejercicio,
                Estado: 'Activo'
            }
        });
        res.status(201).json(nuevoTipo);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

//Actualizar un tipo de ejercicio por ID
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
        const tipo = await prisma.tipo_de_ejercicio.update({
            where: { id: parseInt(id) },
            data: datosActualizados
        });
        res.json(tipo);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

//Eliminar un tipo de ejercicio por ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const tipo = await prisma.tipo_de_ejercicio.update({
            where: { id: parseInt(id) },
            data: { Estado: 'Eliminado' }
        });
        res.json(tipo);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

export default router;
