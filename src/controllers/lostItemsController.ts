import { Request, Response } from 'express';
import { lostItemsService } from '../services/lostItems';

export class LostItemsController {
  async getAllLostItems(req: Request, res: Response) {
    try {
      const items = await lostItemsService.getAllLostItems();
      return res.json(items);
    } catch (error) {
      return res.status(500).json({ 
        message: 'Error retrieving lost items',
        error: (error as Error).message 
      });
    }
  }

  async getLostItemById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const item = await lostItemsService.getLostItemById(id);
      
      if (!item) {
        return res.status(404).json({ 
          message: `Item with id ${id} not found` 
        });
      }

      return res.json(item);
    } catch (error) {
      return res.status(500).json({ 
        message: 'Error retrieving lost item',
        error: (error as Error).message 
      });
    }
  }

  async createLostItem(req: Request, res: Response) {
    try {
      const newItem = await lostItemsService.createLostItem(req.body);
      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(400).json({ 
        message: 'Cannot create lost item. Please provide sufficient details',
        error: (error as Error).message 
      });
    }
  }

  async updateLostItem(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updatedItem = await lostItemsService.updateLostItem(id, req.body);

      if (!updatedItem) {
        return res.status(404).json({ 
          message: `Item with id ${id} not found for update` 
        });
      }

      return res.status(200).json({
        message: 'Successfully updated the item',
        item: updatedItem
      });
    } catch (error) {
      return res.status(500).json({ 
        message: 'Error updating lost item',
        error: (error as Error).message 
      });
    }
  }

  async deleteLostItem(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deleted = await lostItemsService.deleteLostItem(id);

      if (!deleted) {
        return res.status(404).json({ 
          message: `Item with id ${id} not found for deletion` 
        });
      }

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ 
        message: 'Error deleting lost item',
        error: (error as Error).message 
      });
    }
  }
}

// Export a singleton instance
export const lostItemsController = new LostItemsController(); 