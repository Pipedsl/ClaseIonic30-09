import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IUser } from './entidades/IUser'
import { delay } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GaleriaFotosService {
  public cargando = false;
  public usuario : IUser[] = []; 
  private readonly URL_USUARIO = 'https://jsonplaceholder.typicode.com/users';
  public valor = 0;
  constructor(
    private http: HttpClient
  ) { }
  public aumentar(){
    this.valor = this.valor + 1;
  }
  public disminuir(){
    this.valor = this.valor - 1;
  }
  public obtenerUsuarios(){
    this.cargando = true;
    this.http.get<IUser[]>(this.URL_USUARIO)
    .pipe( delay(5000) )
    .subscribe( datos => {
      this.usuario = datos;
      this.cargando = false;
      console.log(datos);
    })

  }
}

