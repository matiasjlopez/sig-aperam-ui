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

  // getBobinas(id): Promise<any> {
  //   return this.http.get(this.baseUrl + '/api/bobina/compra/' + encodeURIComponent(id)).toPromise();
  // }
}
