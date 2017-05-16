import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZabatistaRoutingModule } from './zabatista-routing.module';
import { ZabatistaComponent } from './zabatista.component';
import { ZabatistaPipe } from './zabatista.pipe';

@NgModule({
  imports: [
    CommonModule,
    ZabatistaRoutingModule
  ],
  declarations: [ZabatistaComponent, ZabatistaPipe]
})
export class ZabatistaModule { }
