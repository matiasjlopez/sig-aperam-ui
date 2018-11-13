import { Component, OnInit } from '@angular/core';
import {OcService} from "../../services/oc/oc.service";
import {OrdenDeCompra} from "../../models/orden-de-compra.model";

@Component({
  selector: 'app-ocqa',
  templateUrl: './ocqa.component.html',
  styleUrls: ['./ocqa.component.scss']
})
export class OCQAComponent implements OnInit {

  public ordenes: OrdenDeCompra[];
  public selectedOrden: OrdenDeCompra;
  public bobinas;
  public selectedBobina;

  constructor(private ocService: OcService) { }

  ngOnInit() {
    this.ocService.getOCs().then(ordenes => {
      this.ordenes = ordenes;
    }, error => {
      console.log(error);
    });
  }

  onOrdenSelected(orden: OrdenDeCompra) {
    this.ocService.getBobinasByOC(orden.id).then(bobinas => {
      this.bobinas = bobinas;
    }, error => {
      console.log(error);
    });
  }

}
