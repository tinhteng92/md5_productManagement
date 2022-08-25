import { Injectable } from '@angular/core';
import {Product} from '../model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'IPhone 12',
    price: 240000,
    description: 'New'
  }, {
    id: 2,
    name: 'IPhone 11',
    price: 1560000,
    description: 'Like new'
  }, {
    id: 3,
    name: 'IphoneX',
    price: 986000,
    description: '97%'
  }, {
    id: 4,
    name: 'IPhone 8',
    price: 7540000,
    description: '98%'
  }, {
    id: 5,
    name: 'IPhone 11 Pro',
    price: 1895000,
    description: 'Like new'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product: Product) {
    this.products.push(product);
  }

  // @ts-ignore
  findById (id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }
  }

  findIndexById(id: number | undefined) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        this.products[i] = product;
      }
    }
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }

}
