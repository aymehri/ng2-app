import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreReactiveRoutingModule } from './core-reactive-routing.module';
import { CoreReactiveComponent } from './core-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    CoreReactiveRoutingModule
  ],
  declarations: [CoreReactiveComponent]
})
export class CoreReactiveModule { }
