import { ZabatistaComponent } from './zabatista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
        path: '',
        component: ZabatistaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZabatistaRoutingModule { }
