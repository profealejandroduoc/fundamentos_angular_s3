import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  rutas=[
    {
      path:'/',
      pagina:'Home'
    }
    ,
    {
      path:'/ayuda',
      pagina:'Ayuda'
    },
    {
      path:'/contacto',
      pagina:'Contacto'
    }
  ]
}
