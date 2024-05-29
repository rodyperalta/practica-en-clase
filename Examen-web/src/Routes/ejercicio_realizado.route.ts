import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Obtener todos los ejercicios realizados activos
router.get('/', async (req: Request, res: Response) => {
    try {
        const ejercicios = await prisma.ejercicio_realizado.findMany({
            where: { Estado: 'Activo' }
        });
        res.json(ejercicios);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Obtener un ejercicio realizado por ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ejercicio = await prisma.ejercicio_realizado.findUnique({
            where: { id: parseInt(id), Estado: 'Activo' }
        });
        if (ejercicio) {
            res.json(ejercicio);
        } else {
            res.status(404).json({ error: 'Ejercicio no encontrado' });
        }
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Crear un nuevo ejercicio realizado
router.post('/', async (req: Request, res: Response) => {
    const { Idtipoejercicio, Iddeportista, Fecha, Hora, Tiempo_transcurrido, Calorias_quemadas } = req.body;
    try {
        const nuevoEjercicio = await prisma.ejercicio_realizado.create({
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
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});


// Actualizar un ejercicio realizado por ID
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
        const ejercicio = await prisma.ejercicio_realizado.update({
            where: { id: parseInt(id) },
            data: datosActualizados
        });
        res.json(ejercicio);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Eliminar (lógicamente) un ejercicio realizado por ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ejercicio = await prisma.ejercicio_realizado.update({
            where: { id: parseInt(id) },
            data: { Estado: 'Eliminado' }
        });
        res.json(ejercicio);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

export default router;
