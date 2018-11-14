import { Component, OnInit } from '@angular/core';
import {OrdenDeTrabajo} from "../../models/orden-de-trabajo.model";
import {OtService} from "../../services/ot/ot.service";
import {ProductoService} from "../../services/producto/producto.service";
import {ToastrService} from "ngx-toastr";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-corroboracion',
  templateUrl: './corroboracion.component.html',
  styleUrls: ['./corroboracion.component.scss']
})
export class CorroboracionComponent implements OnInit {

  public form: FormGroup;

  public ordenes: OrdenDeTrabajo[];
  public selectedOrden: OrdenDeTrabajo;
  public producto: any;
  public estadoProductivo: string = 'CORROBORADA';


  constructor(private otService: OtService, private productoService: ProductoService, private toastr: ToastrService, private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.form = this.createForm();
    this.otService.getOTsTerminada().then(ordenes => {
      this.ordenes = ordenes;
    }, error => {
      console.log(error);
    });
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      fecha: {disabled: true, value: ''},
      fechaDespacho: {disabled: true, value: ''}
    });
  }

  onOrdenSelected(orden: OrdenDeTrabajo) {
    this.form.controls['fecha'].setValue(new Date(orden.fecha));
    this.form.controls['fechaDespacho'].setValue(new Date(orden.fechaDespacho));
    this.productoService.getProductoByOT(orden.id).then(producto => {
      this.producto = producto;
    }, error => {
      console.log(error);
    });
  }

  saveProducto() {
    this.producto.estadoProductivo = this.estadoProductivo;
    this.producto.etiquetaDespacho = this.token();
    this.productoService.save(this.producto).then(response => {
      this.toastr.success('Se ha guardado correctamente');
    }, error => {
      console.log(error);
    });
  }

  rand() {
    return Math.random().toString(36).substr(2);
  };

  token() {
    return this.rand() + this.rand();
  };

}
