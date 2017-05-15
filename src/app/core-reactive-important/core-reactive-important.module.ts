import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreReactiveImportantRoutingModule } from './core-reactive-important-routing.module';
import { CoreReactiveImportantComponent } from './core-reactive-important.component';

@NgModule({
  imports: [
    CommonModule,
    CoreReactiveImportantRoutingModule
  ],
  declarations: [CoreReactiveImportantComponent]
})
export class CoreReactiveImportantModule { }
