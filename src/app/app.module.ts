import { HomeService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './../store/counter';
import { clockReducer } from './../store/clock';

import { routes } from './routes';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NgRxStoreComponent } from './ng-rx-store/ng-rx-store.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    NgRxStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(
      { counter: counterReducer },
      { clock: clockReducer }
    )
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
