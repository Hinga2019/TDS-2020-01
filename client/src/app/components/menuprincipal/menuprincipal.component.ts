import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.component.html',
  styleUrls: ['./menuprincipal.component.css']
})
export class MenuprincipalComponent implements OnInit ,AfterViewChecked{
  mostrarboton =true;

  constructor() {console.log('test') }

  ngOnInit(): void {
    
  }
  ngAfterViewChecked(){
    
    const usuario=localStorage.getItem('usuario')
    
    if(usuario!=null){
      this.mostrarboton=false
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
