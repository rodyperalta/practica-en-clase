/*import { Router } from 'express';
import { getAllDeportistas, createDeportista } from '../Controllers/deportistaController';

const router = Router();
router.get('/', getAllDeportistas);
router.post('/', createDeportista);

export { router as deportistaRouter };
*/

// routes/deportistaRoutes.ts
import express from 'express';
import { createDeportista, updateDeportista } from '../Controllers/deportistaController';

const router = express.Router();

router.post('/', createDeportista);
router.put('/:id', updateDeportista);

export default router;
