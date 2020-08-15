import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit ,AfterViewChecked{
  mostrarboton =true;
  user: any = [];

  constructor(private usuarioService:UsuarioService,private activedRoute: ActivatedRoute) {console.log('test') }

  ngOnInit(): void {

  }

  ngAfterViewChecked(){
    const usuario=JSON.parse(localStorage.getItem('usuario'))
    if(usuario!=null){
      this.mostrarboton=false;
    }
  }

  readLocalStorageValue(key) {
    return localStorage.getItem(key); 
  }

  desloguear(){
    localStorage.clear();
    window.location.reload()
  }
}
