import { Request, Response } from 'express';
import { foundItemsService } from '../services/foundItems';

export class FoundItemsController {
  async getAllFoundItems(req: Request, res: Response) {
    try {
      const items = await foundItemsService.getAllFoundItems();
      return res.json(items);
    } catch (error) {
      return res.status(500).json({ 
        message: 'Error retrieving found items',
        error: (error as Error).message 
      });
    }
  }

  async getFoundItemById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const item = await foundItemsService.getFoundItemById(id);
      
      if (!item) {
        return res.status(404).json({ 
          message: `Item with id ${id} not found` 
        });
      }

      return res.json(item);
    } catch (error) {
      return res.status(500).json({ 
        message: 'Error retrieving found item',
        error: (error as Error).message 
      });
    }
  }

  async createFoundItem(req: Request, res: Response) {
    try {
      const newItem = await foundItemsService.createFoundItem(req.body);
      return res.status(201).json(newItem);
    } catch (error) {
      return res.status(400).json({ 
        message: 'Invalid item data',
        error: (error as Error).message 
      });
    }
  }

  async updateFoundItem(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const updatedItem = await foundItemsService.updateFoundItem(id, req.body);

      if (!updatedItem) {
        return res.status(404).json({ 
          message: `Item with id ${id} not found for update` 
        });
      }

      return res.json(updatedItem);
    } catch (error) {
      return res.status(500).json({ 
        message: 'Error updating found item',
        error: (error as Error).message 
      });
    }
  }

  async deleteFoundItem(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deleted = await foundItemsService.deleteFoundItem(id);

      if (!deleted) {
        return res.status(404).json({ 
          message: `Item with id ${id} not found for deletion` 
        });
      }

      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ 
        message: 'Error deleting found item',
        error: (error as Error).message 
      });
    }
  }
}

// Export a singleton instance
export const foundItemsController = new FoundItemsController(); 