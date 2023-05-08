import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { NgNtButtonModule } from 'ng-nt-button';
import { NgNtButtonModule} from 'projects/ng-nt-button/src/public-api'; 

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
  bootstrap: [AppComponent]
})
export class AppModule { }
