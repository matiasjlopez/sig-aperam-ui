import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OCQAComponent} from './components/oc-qa/ocqa.component';
import {OTQAComponent} from './components/ot-qa/otqa.component';
import {OcCreateComponent} from './components/oc-create/oc-create.component';
import {OtCreateComponent} from './components/ot-create/ot-create.component';
import {BobinaCreateComponent} from './components/bobina-create/bobina-create.component';
import {ChapaComponent} from "./components/chapa/chapa.component";
import {MecesaComponent} from "./components/mecesa/mecesa.component";
import {BlancComponent} from "./components/blanc/blanc.component";
import {FlejadoraGrandeComponent} from "./components/flejadora-grande/flejadora-grande.component";
import {FlejadoraChicaComponent} from "./components/flejadora-chica/flejadora-chica.component";

const routes: Routes = [
  { path: 'oc',
    children: [{
      path: 'calidad', component: OCQAComponent
    }, {
      path: 'create', component: OcCreateComponent
    }]
  },
  { path: 'ot',
    children: [{
      path: 'calidad', component: OTQAComponent
    }, {
      path: 'create', component: OtCreateComponent
    }]
  },
  { path: 'bobina/create', component: BobinaCreateComponent},
  { path: 'mecesa', component: MecesaComponent},
  { path: 'blanc', component: BlancComponent},
  { path: 'flejadora',
    children: [{
      path: 'grande', component: FlejadoraGrandeComponent
    }, {
      path: 'chica', component: FlejadoraChicaComponent
    }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
