import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  rutas = [
    {
      path: '/',
      pagina: 'Home'
    },
    {
      path: '/quienes',
      pagina: 'Quienes Somos'
    },
    
    {
      path: '/contacto',
      pagina: 'Contacto'
    },
    {
      path: '/ayuda',
      pagina: 'Ayuda'
    },
  ]
}
