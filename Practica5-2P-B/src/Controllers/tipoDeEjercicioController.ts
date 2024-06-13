/*import { Request, Response } from 'express';
import { getTiposDeEjercicio, createTipoDeEjercicio as createTipoDeEjercicioRepository } from '../repositories/repositories';

export const getAllTiposDeEjercicio = async (req: Request, res: Response) => {
  const tipos = await getTiposDeEjercicio();
  res.json(tipos);
};

export const createTipoDeEjercicio = async (req: Request, res: Response) => {
  const nuevoTipo = await createTipoDeEjercicioRepository(req.body);
  res.json(nuevoTipo);
};
*/

// controllers/tipoDeEjercicioController.ts
import { Request, Response } from 'express';
import { CreateTipoDeEjercicioDTO, UpdateTipoDeEjercicioDTO } from '../dto/TipoDeEjercicio';
import TipoDeEjercicio from '../models/TipoDeEjercicio';

export const createTipoDeEjercicio = async (req: Request, res: Response) => {
  try {
    const data: CreateTipoDeEjercicioDTO = req.body;
    const newTipo = await TipoDeEjercicio.create(data as any); // Ajuste aquí
    res.status(201).json(newTipo);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al crear tipo de ejercicio', error: error.message });
    } else {
      res.status(500).json({ message: 'Error al crear tipo de ejercicio', error: String(error) });
    }
  }
};

export const updateTipoDeEjercicio = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data: UpdateTipoDeEjercicioDTO = req.body;
    await TipoDeEjercicio.update(data as any, { where: { id } }); // Ajuste aquí
    res.status(200).json({ message: 'Tipo de ejercicio actualizado' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al actualizar tipo de ejercicio', error: error.message });
    } else {
      res.status(500).json({ message: 'Error al actualizar tipo de ejercicio', error: String(error) });
    }
  }
};
