import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgNtButtonModule } from 'ng-nt-button';
import { NgNtButtonComponent } from 'ng-nt-button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgNtButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent,NgNtButtonComponent]
})
export class AppModule { }
