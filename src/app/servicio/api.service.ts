import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http: HttpClient) { }

  obtenerDatos<T> (url : string){

    url = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10';
    return this._http.get<T[]>(url);
    
  }
}
