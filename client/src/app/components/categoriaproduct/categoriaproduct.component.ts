import { Component, OnInit } from '@angular/core';
//import { RouterLink } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-categoriaproduct',
  templateUrl: './categoriaproduct.component.html',
  styleUrls: ['./categoriaproduct.component.css']
})
export class CategoriaproductComponent implements OnInit {
  products: any = []; 
  constructor(private productosService:ProductosService,private router: Router,private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if(params.idcategoria){
      this.productosService.getProductCat(params.idcategoria)
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
