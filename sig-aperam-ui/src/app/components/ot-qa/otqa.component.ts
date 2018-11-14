import { Component, OnInit } from '@angular/core';
import {OrdenDeTrabajo} from "../../models/orden-de-trabajo.model";
import {OtService} from "../../services/ot/ot.service";
import {BobinaService} from "../../services/bobina/bobina.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-otqa',
  templateUrl: './otqa.component.html',
  styleUrls: ['./otqa.component.scss']
})
export class OTQAComponent implements OnInit {

  public ordenes: OrdenDeTrabajo[];
  public selectedOrden: OrdenDeTrabajo;
  public bobinas: any[];
  public selectedBobina: any;

  public form: FormGroup;
  public estadoProductivo: string = 'PENDIENTE_PRODUCCION';

  constructor(private otService: OtService,
              private bobinaService: BobinaService,
              private formBuilder: FormBuilder,
              private toastr: ToastrService
  ) { }

  createForm(): FormGroup {
    return this.formBuilder.group({
      fecha: {disabled: true, value: ''},
      fechaDespacho: {disabled: true, value: ''}
    });
  }

  ngOnInit() {
    this.form = this.createForm();
    this.otService.getOTsPendiente().then(ordenes => {
      this.ordenes = ordenes;
    }, error => {
      console.log(error);
    });
    this.bobinaService.getCorrectBobinas().then(bobinas => {
      this.bobinas = bobinas;
    }, error => {
      console.log(error);
    });
  }

  onOrdenSelected(orden: OrdenDeTrabajo ) {
    this.form.controls['fecha'].setValue(new Date(orden.fecha));
    this.form.controls['fechaDespacho'].setValue(new Date(orden.fechaDespacho));
  }

  onBobinaSelected(bobina: any) {
    if(bobina.estadoProductivo !== 'PENDIENTE_CONTROL') this.estadoProductivo = bobina.estadoProductivo;
  }

  saveBobina() {
    if(!this.selectedOrden) {
      this.toastr.error('Debe seleccionar una orden de trabajo');
    } else {
      this.selectedBobina.estadoProductivo = this.estadoProductivo;
      this.bobinaService.save(this.selectedBobina).then(response => {
        if(this.selectedBobina.estadoProductivo === 'PENDIENTE_PRODUCCION') {
          this.selectedOrden.bobina = this.selectedBobina;
          this.selectedOrden.estado = 'EN_PROCESO';
          this.otService.save(this.selectedOrden).then(response2 => {
            this.toastr.success('Se ha guardado correctamente');
            console.log(response2);
          }, error2 => {
            console.log(error2);
          });
        } else {
          this.toastr.success('Se ha guardado correctamente');
        }
        console.log(response);
      }, error => {
        console.log(error);
      });
    }
  }

}
