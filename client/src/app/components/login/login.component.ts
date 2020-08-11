import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  user={
    mail:'',
    password:''
  }
  constructor(private usuarioservice:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user)
    this.usuarioservice.login(this.user).subscribe(
      (res:any)=>{
        if(res.length){
          localStorage.setItem('usuario',JSON.stringify(res[0]))
          this.router.navigate(['/listar'])
        } else {
          localStorage.setItem('usuario',JSON.stringify('none'))
          console.log('nada')
        } 
        console.log(res)
        
      }
    )
  }
}
