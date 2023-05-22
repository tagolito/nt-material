import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { NgNtButtonComponent } from './ng-nt-button.component';
import { NgNtIconButtonComponent } from './icon-button';

@NgModule({
  declarations: [
    NgNtButtonComponent,
    NgNtIconButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgNtButtonComponent,
    NgNtIconButtonComponent
  ]
})
export class NgNtButtonModule { }
