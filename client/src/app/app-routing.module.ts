import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarproductsComponent} from './components/listarproducts/listarproducts.component';
import {RegistrousuarioComponent} from './components/registrousuario/registrousuario.component';
import {LoginComponent} from './components/login/login.component';
import  {DetalleproductoComponent} from './components/detalleproducto/detalleproducto.component';
import {CategoriaproductComponent} from './components/categoriaproduct/categoriaproduct.component';
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
  },
  {
    path:'detalleProducto/:idproducto',
    component: DetalleproductoComponent
  },
  {
    path:'categoriaproduct/:idcategoria',
    component: CategoriaproductComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
