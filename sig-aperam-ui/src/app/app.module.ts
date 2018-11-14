import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { OCQAComponent } from './components/oc-qa/ocqa.component';
import { OTQAComponent } from './components/ot-qa/otqa.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OcCreateComponent } from './components/oc-create/oc-create.component';
import {DemoMaterialModule} from './material/material-module';
import { OtCreateComponent } from './components/ot-create/ot-create.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BobinaCreateComponent } from './components/bobina-create/bobina-create.component';
import {ToastrModule} from "ngx-toastr";
import { ChapaComponent } from './components/chapa/chapa.component';
import { FlejeComponent } from './components/fleje/fleje.component';
import { MecesaComponent } from './components/mecesa/mecesa.component';
import { BlancComponent } from './components/blanc/blanc.component';
import { FlejadoraGrandeComponent } from './components/flejadora-grande/flejadora-grande.component';
import { FlejadoraChicaComponent } from './components/flejadora-chica/flejadora-chica.component';

@NgModule({
  declarations: [
    AppComponent,
    OCQAComponent,
    OTQAComponent,
    OcCreateComponent,
    OtCreateComponent,
    BobinaCreateComponent,
    ChapaComponent,
    FlejeComponent,
    MecesaComponent,
    BlancComponent,
    FlejadoraGrandeComponent,
    FlejadoraChicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
