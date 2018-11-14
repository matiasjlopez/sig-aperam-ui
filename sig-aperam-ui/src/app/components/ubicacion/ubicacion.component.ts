import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {OrdenDeTrabajo} from "../../models/orden-de-trabajo.model";
import {OtService} from "../../services/ot/ot.service";
import {ProductoService} from "../../services/producto/producto.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit {

  public form: FormGroup;

  public productos: any[];
  public selectedProducto: any;
  public orden: OrdenDeTrabajo;
  public estadoProductivo: string = 'CORROBORADA_DESPACHO';

  constructor(private otService: OtService, private productoService: ProductoService, private toastr: ToastrService, private formBuilder: FormBuilder,) { }

  createForm(): FormGroup {
    return this.formBuilder.group({
      fecha: {disabled: true, value: ''},
      fechaDespacho: {disabled: true, value: ''}
    });
  }

  ngOnInit() {
    this.form = this.createForm();
    this.productoService.getProductosUbicacion().then(productos => {
      this.productos = productos;
    }, error => {
      console.log(error);
    });
  }

  onProductoSelected(producto) {
    this.form.controls['fecha'].setValue(new Date(producto.ordenDeTrabajo.fecha));
    this.form.controls['fechaDespacho'].setValue(new Date(producto.ordenDeTrabajo.fechaDespacho));
  }

  saveProducto() {
    this.selectedProducto.estadoProductivo = this.estadoProductivo;
    this.productoService.save(this.selectedProducto).then(response => {
      this.toastr.success('Se ha guardado correctamente');
    }, error => {
      console.log(error);
    });
  }

}
