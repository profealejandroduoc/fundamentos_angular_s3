import { Component, OnInit } from '@angular/core';
import { DatosexternosService } from '../../services/datosexternos.service';

@Component({
  selector: 'app-quienes',
  templateUrl: './quienes.component.html',
  styleUrl: './quienes.component.css'
})
export class QuienesComponent implements OnInit {
  
  constructor (private srv:DatosexternosService){

  }

  posteos:any;

  ngOnInit() {

      this.srv.obtenerDatos().subscribe(datos=>{
        //console.log(datos);
        this.posteos=datos;
        console.log(this.posteos);
      })
  }

}
