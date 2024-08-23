import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosexternosService {

  constructor(private http_cli:HttpClient) { }

  obtenerDatos()
  {
    return this.http_cli.get('https://jsonplaceholder.typicode.com/posts');
  }


}
