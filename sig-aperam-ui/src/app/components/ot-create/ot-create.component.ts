import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OrdenDeTrabajo} from '../../models/orden-de-trabajo.model';
import {OtService} from '../../services/ot/ot.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ot-create',
  templateUrl: './ot-create.component.html',
  styleUrls: ['./ot-create.component.scss'],
  providers: [OtService]
})
export class OtCreateComponent implements OnInit {

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder, private otService: OtService, private router: Router) { }

  ngOnInit() {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      serieSolicitada: ['', Validators.required],
      espesorSolicitado: ['', Validators.required],
      anchoSolicitado: ['', Validators.required],
      largoSolicitado: ['', Validators.required],
      esmerilado: [''],
      cantidad: ['', Validators.required],
      fechaDespacho: [''],
      estado: ['PENDIENTE'],
      producto: ['', Validators.required]
    });
  }

  add() {
    this.otService.addOt(new OrdenDeTrabajo(this.form.getRawValue())).then(_ => {
      this.form.reset();
      this.router.navigate(['ot', 'calidad']);
    });
  }
}
