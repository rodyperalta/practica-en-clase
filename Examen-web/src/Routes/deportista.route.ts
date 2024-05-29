import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Obtener todos los deportistas activos
router.get('/', async (req: Request, res: Response) => {
    try {
        const deportistas = await prisma.deportista.findMany({
            where: { Estado: 'Activo' }
        });
        res.json(deportistas);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Obtener un deportista por ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deportista = await prisma.deportista.findUnique({
            where: {
                id: parseInt(id),
                Estado: 'Activo'
            }
        });
        if (deportista) {
            res.json(deportista);
        } else {
            res.status(404).json({ error: 'Deportista no encontrado' });
        }
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Crear un nuevo deportista
router.post('/', async (req: Request, res: Response) => {
    const { nombre, peso, altura, edad } = req.body;
    try {
        const nuevoDeportista = await prisma.deportista.create({
            data: {
                nombre,
                peso,
                altura,
                edad,
                Estado: 'Activo'
            }
        });
        res.status(201).json(nuevoDeportista);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Actualizar un deportista por ID
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    try {
        const deportista = await prisma.deportista.update({
            where: { id: parseInt(id) },
            data: datosActualizados
        });
        res.json(deportista);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

// Eliminar (lógicamente) un deportista por ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deportista = await prisma.deportista.update({
            where: { id: parseInt(id) },
            data: { Estado: 'Eliminado' }
        });
        res.json(deportista);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
});

export default router;
