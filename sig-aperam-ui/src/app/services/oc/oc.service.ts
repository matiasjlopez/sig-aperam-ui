import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {OrdenDeCompra} from '../../models/orden-de-compra.model';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class OcService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getOCs(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/orden/compra').toPromise();
  }

  public addOc(ordenDeCompra: OrdenDeCompra): Promise<any> {
     return this.http.post(this.baseUrl + '/api/orden/compra', ordenDeCompra).toPromise();
  }

  getBobinasByOC(id): Promise<any> {
    return this.http.get(this.baseUrl + '/api/bobina/compra/' + encodeURIComponent(id)).toPromise();
  }
}
