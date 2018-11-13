import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OcService} from '../../services/oc/oc.service';
import {Router} from '@angular/router';
import {OrdenDeCompra} from '../../models/orden-de-compra.model';
import {BobinaService} from "../../services/bobina/bobina.service";

@Component({
  selector: 'app-bobina-create',
  templateUrl: './bobina-create.component.html',
  styleUrls: ['./bobina-create.component.scss'],
  providers: [BobinaService]
})
export class BobinaCreateComponent implements OnInit {

  public form: FormGroup;
  ocs: OrdenDeCompra[];
  constructor(private formBuilder: FormBuilder, private ocService: OcService,
              private router: Router, private bobinaService: BobinaService) { }

  ngOnInit() {
    this.form = this.createForm();
    this.ocs = [];
    this.getOcs();
  }
  createForm(): FormGroup {
    return this.formBuilder.group({
      serie: ['', Validators.required],
      ancho: ['', Validators.required],
      espesor: ['', Validators.required],
      pesoTotal: ['', Validators.required],
      largo: ['', Validators.required],
      ordenDeCompraId: ['', Validators.required]
    });
  }

  add() {
    this.bobinaService.addBobina(this.form.getRawValue()).then(_ => {
      this.form.reset();
      this.router.navigate(['oc', 'calidad']);
    });
  }
  getOcs() {
    this.ocService.getOCs().then(res => this.ocs = res);
  }
}
