// This will be mostly similar to the foundItemsRouter.ts

import express, { Router } from 'express';
import { lostItemsController } from '../controllers/lostItemsController';

const router: Router = express.Router();

router.use(express.json());

// ALL THE REQUESTS COMING HERE ARE HAVING THE ENDPOINT AS /lost/
router.get('/', lostItemsController.getAllLostItems);
router.get('/:id', lostItemsController.getLostItemById);
router.post('/', lostItemsController.createLostItem);
router.put('/:id', lostItemsController.updateLostItem);
router.delete('/:id', lostItemsController.deleteLostItem);

export default router;