import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  items = [];
  
  constructor() { }

  getItems() {
    return this.items;
  }

  async removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(item) {
    this.items.push(item);
  }

  async editItem(item, index) {
    this.items[index] = item;
  }
}

