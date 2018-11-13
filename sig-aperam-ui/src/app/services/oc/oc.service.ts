import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {OrdenDeCompra} from '../../models/orden-de-compra.model';

@Injectable({
  providedIn: 'root'
})
export class OcService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  public addOc(ordenDeCompra: OrdenDeCompra): Promise<any> {
     return this.http.post(this.baseUrl + '/api/orden/compra', ordenDeCompra).toPromise();
  }
}
