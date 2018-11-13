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

@NgModule({
  declarations: [
    AppComponent,
    OCQAComponent,
    OTQAComponent,
    OcCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
