import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {OrdenDeCompra} from '../../models/orden-de-compra.model';

@Injectable({
  providedIn: 'root'
})
export class BobinaService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getOCs(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/orden/compra').toPromise();
  }

  public addBobina(bobina: any): Promise<any> {
    return this.http.post(this.baseUrl + '/api/bobina', bobina).toPromise();
  }

  getBobinasByOC(id): Promise<any> {
    return this.http.get(this.baseUrl + '/api/bobina/compra/' + encodeURIComponent(id)).toPromise();
  }

  getCorrectBobinas(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/bobina/correct').toPromise();
  }

  save(bobina): Promise<any> {
    return this.http.put(this.baseUrl + '/api/bobina', bobina).toPromise();
  }
}
