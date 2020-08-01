import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Products} from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) {} 

  getProducts(){
    return this.http.get(`${this.API_URI}/products`);
  }

  getProduct(id: string){
    return this.http.get(`${this.API_URI}/products/${id}`);
  }

  deleteProduct(id: string){
    return this.http.delete(`${this.API_URI}/products/${id}`);
  }

  saveProduct(products: Products){
    return this.http.post(`${this.API_URI}/products`,products);
  }

  updateProduct(id: string,updatedProduct: Products) {
    return this.http.put(`${this.API_URI}/products/${id}`,updatedProduct);
  }
}
