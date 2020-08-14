import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {

  products: any = []; 

  constructor(private productsService:ProductosService,private router: Router,private activedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.idproducto){
      this.productsService.getProduct(params.idproducto)
      .subscribe(
        res=>{
          console.log(res); 
          this.products = res;
        },
        err => console.error(err)
      )
    }
  }

}
