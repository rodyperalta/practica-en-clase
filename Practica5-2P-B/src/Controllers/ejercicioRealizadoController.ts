/*import { Request, Response } from 'express';
import { getEjerciciosRealizados, createEjercicioRealizado } from '../repositories/repositories';

export const getAllEjercicios = async (req: Request, res: Response) => {
  const ejercicios = await getEjerciciosRealizados();
  res.json(ejercicios);
};

export const createEjercicio = async (req: Request, res: Response) => {
  const nuevoEjercicio = await createEjercicioRealizado(req.body);
  res.json(nuevoEjercicio);
};
*/

// controllers/ejercicioRealizadoController.ts
import { Request, Response } from 'express';
import { CreateEjercicioRealizadoDTO, UpdateEjercicioRealizadoDTO } from '../dto/EjercicioRealizado';
import EjercicioRealizado from '../models/EjercicioRealizado';

export const createEjercicioRealizado = async (req: Request, res: Response) => {
  try {
    const data: CreateEjercicioRealizadoDTO = req.body;
    const newEjercicio = await EjercicioRealizado.create(data as any); // Ajuste aquí
    res.status(201).json(newEjercicio);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al crear ejercicio realizado', error: error.message });
    } else {
      res.status(500).json({ message: 'Error al crear ejercicio realizado', error: String(error) });
    }
  }
};

export const updateEjercicioRealizado = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data: UpdateEjercicioRealizadoDTO = req.body;
    await EjercicioRealizado.update(data as any, { where: { id } }); // Ajuste aquí
    res.status(200).json({ message: 'Ejercicio realizado actualizado' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al actualizar ejercicio realizado', error: error.message });
    } else {
      res.status(500).json({ message: 'Error al actualizar ejercicio realizado', error: String(error) });
    }
  }
};

