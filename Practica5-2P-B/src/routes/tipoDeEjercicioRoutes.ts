/*import { Router } from 'express';
import { getAllTiposDeEjercicio, createTipoDeEjercicio } from '../Controllers/tipoDeEjercicioController';

const router = Router();
router.get('/', getAllTiposDeEjercicio);
router.post('/', createTipoDeEjercicio);

export { router as tipoDeEjercicioRouter };
*/

// routes/tipoDeEjercicioRoutes.ts
import express from 'express';
import { createTipoDeEjercicio, updateTipoDeEjercicio } from '../Controllers/tipoDeEjercicioController';

const router = express.Router();

router.post('/', createTipoDeEjercicio);
router.put('/:id', updateTipoDeEjercicio);

export default router;
