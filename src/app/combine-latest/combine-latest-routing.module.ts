import { CombineLatestComponent } from './combine-latest.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
        path: '',
        component: CombineLatestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombineLatestRoutingModule { }
