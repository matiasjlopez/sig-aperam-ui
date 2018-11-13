import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OcService} from '../../services/oc/oc.service';
import {OrdenDeCompra} from '../../models/orden-de-compra.model';

@Component({
  selector: 'app-oc-create',
  templateUrl: './oc-create.component.html',
  styleUrls: ['./oc-create.component.scss'],
  providers: [OcService]
})
export class OcCreateComponent implements OnInit {

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private ocService: OcService) { }

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      serie: ['', Validators.required],
      ancho: ['', Validators.required],
      espesor: ['', Validators.required],
      peso: ['', Validators.required]
    });
  }

  add() {
    this.ocService.addOc(new OrdenDeCompra(this.form.getRawValue())).then(_ => console.log('Ok'));
  }
}
