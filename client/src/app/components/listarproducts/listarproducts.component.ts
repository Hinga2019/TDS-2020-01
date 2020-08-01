import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listarproducts',
  templateUrl: './listarproducts.component.html',
  styleUrls: ['./listarproducts.component.css']
})
export class ListarproductsComponent implements OnInit {
  hide = true;
  products: any = []; 

  constructor(private productsService:ProductosService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.error(err)
    )
  }

}
