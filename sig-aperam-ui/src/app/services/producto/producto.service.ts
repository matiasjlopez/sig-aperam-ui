import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addProducto(producto): Promise<any> {
    return this.http.post(this.baseUrl + '/api/producto', producto).toPromise();
  }

}
