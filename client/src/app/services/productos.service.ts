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

  getProduct(idproducto: string){
    return this.http.get(`${this.API_URI}/products/${idproducto}`);
  }

  getProductCat(idcategoria:string){
    return this.http.get(`${this.API_URI}/products/categoria/${idcategoria}`);
  }

  deleteProduct(idproducto: string){
    return this.http.delete(`${this.API_URI}/products/${idproducto}`);
  }

  saveProduct(products: Products){
    return this.http.post(`${this.API_URI}/products`,products);
  }

  updateProduct(idproducto: string,updatedProduct: Products) {
    return this.http.put(`${this.API_URI}/products/${idproducto}`,updatedProduct);
  }
}
