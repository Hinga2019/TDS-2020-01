import { Component, OnInit, } from '@angular/core';
import { Users } from '../../models/users';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrousuarioComponent implements OnInit {

  users: Users ={
    idusuario: 0,
    dni:'',
    nombre:'',
    apellido:'',
    departamento:'',
    provincia:'',
    distrito:'',
    direccion:'',
    telefono:'',
    correo:'',
    usuario:'',
    pass:''
  };

  constructor(private usersService:UsuarioService) { }

  ngOnInit(): void {
  }

  guardarNewUsuario(){
    

    this.usersService.saveUsers(this.users)
    .subscribe(
      res =>{
        console.log(res);
      },
      err => console.error(err)
    )
  }

}
