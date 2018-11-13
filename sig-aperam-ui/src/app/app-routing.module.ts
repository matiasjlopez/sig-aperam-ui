import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OCQAComponent} from './components/ocqa/ocqa.component';
import {OTQAComponent} from './components/otqa/otqa.component';

const routes: Routes = [
  { path: 'calidadOC', component: OCQAComponent },
  { path: 'calidadOT', component: OTQAComponent },
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
