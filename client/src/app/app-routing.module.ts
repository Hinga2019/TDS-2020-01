import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarproductsComponent} from './components/listarproducts/listarproducts.component';
import {RegistrousuarioComponent} from './components/registrousuario/registrousuario.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/listar',
    pathMatch:'full'
  },
  {
    path:'listar',
    component:ListarproductsComponent,
  },
  {
    path:'listar/registro',
    component: RegistrousuarioComponent,
  },
  {
    path:'listar/login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
