import { Component, OnInit } from '@angular/core';
import {OcService} from "../../services/oc/oc.service";
import {OrdenDeCompra} from "../../models/orden-de-compra.model";
import {BobinaService} from "../../services/bobina/bobina.service";

@Component({
  selector: 'app-ocqa',
  templateUrl: './ocqa.component.html',
  styleUrls: ['./ocqa.component.scss']
})
export class OCQAComponent implements OnInit {

  public ordenes: OrdenDeCompra[];
  public selectedOrden: OrdenDeCompra;
  public bobinas: any[];
  public selectedBobina: any;

  constructor(private ocService: OcService, private bobinaService: BobinaService) { }

  ngOnInit() {
    this.ocService.getOCs().then(ordenes => {
      this.ordenes = ordenes;
    }, error => {
      console.log(error);
    });
  }

  onOrdenSelected(orden: OrdenDeCompra) {
    this.selectedBobina = null;
    this.bobinas = [];
    this.bobinaService.getBobinasByOC(orden.id).then(bobinas => {
      this.bobinas = bobinas;
    }, error => {
      console.log(error);
    });
  }

  saveBobina(esCorrecto: boolean) {
    this.selectedBobina.aptitudInicial = esCorrecto;
    this.bobinaService.save(this.selectedBobina).then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

}
