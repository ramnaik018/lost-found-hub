// Define interfaces for our data models
export interface Item {
  id: string;
  name: string;
  description: string;
  location: string;
  date: Date;
  status: 'lost' | 'found';
  contactInfo: string;
  imageUrl?: string;
}

// In-memory database
class InMemoryDB {
  private lostItems: Item[] = [];
  private foundItems: Item[] = [];

  // Lost items methods
  getAllLostItems(): Item[] {
    return this.lostItems;
  }

  getLostItemById(id: string): Item | undefined {
    return this.lostItems.find(item => item.id === id);
  }

  addLostItem(item: Item): Item {
    this.lostItems.push(item);
    return item;
  }

  updateLostItem(id: string, updatedItem: Partial<Item>): Item | undefined {
    const index = this.lostItems.findIndex(item => item.id === id);
    if (index === -1) return undefined;
    
    this.lostItems[index] = { ...this.lostItems[index], ...updatedItem };
    return this.lostItems[index];
  }

  deleteLostItem(id: string): boolean {
    const initialLength = this.lostItems.length;
    this.lostItems = this.lostItems.filter(item => item.id !== id);
    return this.lostItems.length < initialLength;
  }

  // Found items methods
  getAllFoundItems(): Item[] {
    return this.foundItems;
  }

  getFoundItemById(id: string): Item | undefined {
    return this.foundItems.find(item => item.id === id);
  }

  addFoundItem(item: Item): Item {
    this.foundItems.push(item);
    return item;
  }

  updateFoundItem(id: string, updatedItem: Partial<Item>): Item | undefined {
    const index = this.foundItems.findIndex(item => item.id === id);
    if (index === -1) return undefined;
    
    this.foundItems[index] = { ...this.foundItems[index], ...updatedItem };
    return this.foundItems[index];
  }

  deleteFoundItem(id: string): boolean {
    const initialLength = this.foundItems.length;
    this.foundItems = this.foundItems.filter(item => item.id !== id);
    return this.foundItems.length < initialLength;
  }
}

// Export a singleton instance
export const db = new InMemoryDB(); 