import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OCQAComponent} from './components/ocqa/ocqa.component';
import {OTQAComponent} from './components/otqa/otqa.component';
import {OcCreateComponent} from './components/oc-create/oc-create.component';
import {OtCreateComponent} from './components/ot-create/ot-create.component';
import {BobinaCreateComponent} from './components/bobina-create/bobina-create.component';

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
  { path: 'bobina/create', component: BobinaCreateComponent}
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
