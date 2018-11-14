import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {OrdenDeTrabajo} from '../../models/orden-de-trabajo.model';

@Injectable({
  providedIn: 'root'
})
export class OtService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public addOt(ordenDeTrabajo: OrdenDeTrabajo): Promise<any> {
    return this.http.post(this.baseUrl + '/api/orden/trabajo', ordenDeTrabajo).toPromise();
  }

  getOTs(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/orden/trabajo').toPromise();
  }

  getOTsPendiente(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/orden/trabajo/PENDIENTE').toPromise();
  }

  getOTsTerminada(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/orden/trabajo/TERMINADA').toPromise();
  }

  getOTsChapa(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/orden/trabajo/producto/CHAPA').toPromise();
  }

  getOTsFleje(): Promise<any> {
    return this.http.get(this.baseUrl + '/api/orden/trabajo/producto/FLEJE').toPromise();
  }


    save(ot: OrdenDeTrabajo): Promise<any> {
    return this.http.put(this.baseUrl + '/api/orden/trabajo', ot).toPromise();
  }

}
