import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarproducts',
  templateUrl: './listarproducts.component.html',
  styleUrls: ['./listarproducts.component.css']
})
export class ListarproductsComponent implements OnInit {
  hide = true;
  products: any = []; 

  constructor(private productsService:ProductosService,private router: Router) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    )
  }
  
}
