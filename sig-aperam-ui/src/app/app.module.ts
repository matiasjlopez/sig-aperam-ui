import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { OCQAComponent } from './components/ocqa/ocqa.component';
import { OTQAComponent } from './components/otqa/otqa.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OcCreateComponent } from './components/oc-create/oc-create.component';
import {DemoMaterialModule} from './material/material-module';
import { OtCreateComponent } from './components/ot-create/ot-create.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BobinaCreateComponent } from './components/bobina-create/bobina-create.component';

@NgModule({
  declarations: [
    AppComponent,
    OCQAComponent,
    OTQAComponent,
    OcCreateComponent,
    OtCreateComponent,
    BobinaCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
