import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Users} from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http:HttpClient) {} 

  getUsers(){
    return this.http.get(`${this.API_URI}/users`);
  }

  getUser(id: string){
    return this.http.get(`${this.API_URI}/users/${id}`);
  }

  deleteUsers(id: string){
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }

  saveUsers(users: Users){
    return this.http.post(`${this.API_URI}/users`,users);
  }

  updateUsers(id: string,updateUser: Users) {
    return this.http.put(`${this.API_URI}/users/${id}`,updateUser);
  }

  login(users){
    return this.http.post(`${this.API_URI}/users/login`,users);
  }
}
