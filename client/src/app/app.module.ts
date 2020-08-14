import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//MATERIAL
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
//COMPONENT
import { MenuprincipalComponent } from './components/menuprincipal/menuprincipal.component';
import { RegistrousuarioComponent } from './components/registrousuario/registrousuario.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { LoginComponent } from './components/login/login.component';
import { ListarproductsComponent } from './components/listarproducts/listarproducts.component';
import {MatTableModule} from '@angular/material/table';
//SERVICE
import {ProductosService} from './services/productos.service';
import {UsuarioService} from './services/usuario.service';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    RegistrousuarioComponent,
    PerfilusuarioComponent,
    LoginComponent,
    ListarproductsComponent,
    DetalleproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    FormsModule,
    MatTableModule
  ],
  providers: [
    ProductosService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
