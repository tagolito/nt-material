import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { NgNtButtonModule } from 'dist/ng-nt-button';
//import { NgNtButtonModule} from 'projects/ng-nt-button/src/public-api'; 
import { NgNtButtonModule, NgNtIconModule} from 'projects/tagolito/symbols/src/public-api'; 


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgNtButtonModule,
    NgNtIconModule
  ],
  exports: [CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
