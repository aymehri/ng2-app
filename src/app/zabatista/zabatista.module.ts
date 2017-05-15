import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZabatistaRoutingModule } from './zabatista-routing.module';
import { ZabatistaComponent } from './zabatista.component';

@NgModule({
  imports: [
    CommonModule,
    ZabatistaRoutingModule
  ],
  declarations: [ZabatistaComponent]
})
export class ZabatistaModule { }
