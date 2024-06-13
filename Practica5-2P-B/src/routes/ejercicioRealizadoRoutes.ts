/*import { Router } from 'express';
import { getAllEjercicios, createEjercicio } from '../Controllers/ejercicioRealizadoController';

const router = Router();
router.get('/', getAllEjercicios);
router.post('/', createEjercicio);

export { router as ejercicioRealizadoRouter };
*/

// routes/ejercicioRealizadoRoutes.ts
import express from 'express';
import { createEjercicioRealizado, updateEjercicioRealizado } from '../Controllers/ejercicioRealizadoController';

const router = express.Router();

router.post('/', createEjercicioRealizado);
router.put('/:id', updateEjercicioRealizado);

export default router;
