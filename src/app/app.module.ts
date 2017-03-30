import { HomeService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './../store/counter';
import { clockReducer } from './../store/clock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(
      { counter: counterReducer },
      { clock: clockReducer }
    )
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
