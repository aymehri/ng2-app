import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombineLatestRoutingModule } from './combine-latest-routing.module';
import { CombineLatestComponent } from './combine-latest.component';

@NgModule({
  imports: [
    CommonModule,
    CombineLatestRoutingModule
  ],
  declarations: [CombineLatestComponent]
})
export class CombineLatestModule { }
