import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OCQAComponent} from './components/ocqa/ocqa.component';
import {OTQAComponent} from './components/otqa/otqa.component';
import {OcCreateComponent} from './components/oc-create/oc-create.component';

const routes: Routes = [
  { path: 'oc',
    children: [{
      path: 'calidad', component: OCQAComponent
    }, {
      path: 'create', component: OcCreateComponent
    }]
  },
  { path: 'calidadOT', component: OTQAComponent }
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
