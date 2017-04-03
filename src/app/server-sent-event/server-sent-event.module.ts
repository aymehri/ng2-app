import { ServerSentEventComponent } from './server-sent-event.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServerSentEventComponent
      }
    ])
  ],
  declarations: [ServerSentEventComponent]
})
export class ServerSentEventModule { }
