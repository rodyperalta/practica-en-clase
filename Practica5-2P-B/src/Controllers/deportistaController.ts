/*import { Request, Response } from 'express';
import { getDeportistas, createDeportista as createDeportistaRepository } from '../repositories/repositories';

export const getAllDeportistas = async (req: Request, res: Response) => {
  const deportistas = await getDeportistas();
  res.json(deportistas);
};

export const createDeportista = async (req: Request, res: Response) => {
  const nuevoDeportista = await createDeportistaRepository(req.body);
  res.json(nuevoDeportista);
};
*/

// controllers/deportistaController.ts
import { Request, Response } from 'express';
import { CreateDeportistaDTO, UpdateDeportistaDTO } from '../dto/Deportista';
import Deportista from '../models/Deportista';

export const createDeportista = async (req: Request, res: Response) => {
  try {
    const data: CreateDeportistaDTO = req.body;
    const newDeportista = await Deportista.create(data as any); // Ajuste aquí
    res.status(201).json(newDeportista);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al crear deportista', error: error.message });
    } else {
      res.status(500).json({ message: 'Error al crear deportista', error: String(error) });
    }
  }
};

export const updateDeportista = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data: UpdateDeportistaDTO = req.body;
    await Deportista.update(data as any, { where: { id } }); // Ajuste aquí
    res.status(200).json({ message: 'Deportista actualizado' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Error al actualizar deportista', error: error.message });
    } else {
      res.status(500).json({ message: 'Error al actualizar deportista', error: String(error) });
    }
  }
};

