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

  getProductoByOT(ordenId): Promise<any> {
    return this.http.get(this.baseUrl + '/api/producto/trabajo/' + encodeURIComponent(ordenId)).toPromise();
  }

  save(producto): Promise<any> {
    return this.http.put(this.baseUrl + '/api/producto', producto).toPromise();
  }

  getProductosDisposicion(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/producto/CORROBORADA').toPromise();
  }

  getProductosUbicacion(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/producto/CORROBORADA_DESPACHO').toPromise();
  }

}
