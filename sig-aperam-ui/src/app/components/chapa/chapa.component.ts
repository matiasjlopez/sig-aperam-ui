import {Component, Input, OnInit} from '@angular/core';
import {OrdenDeTrabajo} from "../../models/orden-de-trabajo.model";
import {OtService} from "../../services/ot/ot.service";
import {BobinaService} from "../../services/bobina/bobina.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ProductoService} from "../../services/producto/producto.service";

@Component({
  selector: 'app-chapa',
  templateUrl: './chapa.component.html',
  styleUrls: ['./chapa.component.scss']
})
export class ChapaComponent implements OnInit {

  @Input() estadoBobina: string;

  public ordenes: OrdenDeTrabajo[];
  public selectedOrden: OrdenDeTrabajo;
  public form: FormGroup;

  public producto = {
    ordenDeTrabajoId: null,
    producto: 'CHAPA',
    cantidad: null
  };

  constructor(private otService: OtService,
              private bobinaService: BobinaService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService,
              private productoService: ProductoService
  ) { }

  createForm(): FormGroup {
    return this.formBuilder.group({
      fecha: {disabled: true, value: ''},
      fechaDespacho: {disabled: true, value: ''},
      cantidad: ['', Validators.required],
      ancho: [''],
      espesor: [''],
      peso: ['']
    });
  }

  ngOnInit() {
    this.form = this.createForm();
    this.otService.getOTsChapa().then(ordenes => {
      this.ordenes = ordenes;
    }, error => {
      console.log(error);
    });
  }

  guardar() {
    if(this.form.controls['espesor'].value !== '') this.selectedOrden.bobina.espesor = this.form.controls['espesor'].value;
    if(this.form.controls['ancho'].value !== '') this.selectedOrden.bobina.ancho = this.form.controls['ancho'].value;
    if(this.form.controls['peso'].value !== '') this.selectedOrden.bobina.ancho = this.form.controls['peso'].value;
    this.selectedOrden.bobina.estadoProductivo = this.estadoBobina;
    this.selectedOrden.estado = 'TERMINADA';
    this.producto.cantidad = this.form.controls['cantidad'].value;
    this.producto.ordenDeTrabajoId = this.selectedOrden.id;
    this.otService.save(this.selectedOrden).then(response => {
      console.log(response);
      this.bobinaService.save(this.selectedOrden.bobina).then(response2 => {
        console.log(response2);
        this.productoService.addProducto(this.producto).then(response3 => {
          this.toastr.success('Se ha guardado correctamente');
        }, error3 => {
          console.log(error3);
        });
      }, error2 => {
        console.log(error2);
      });
    }, error => {
      console.log(error);
    });
  }

}
