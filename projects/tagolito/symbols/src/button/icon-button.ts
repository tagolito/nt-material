import { Component, ElementRef, Input} from '@angular/core';
import { NgNtButtonBase } from './ng-nt-button-base';

@Component({
  selector: 'button[nt-icon-button]',
  host: {'(mousemove)':'onMouseMove($event)'},
  template: `<ng-content></ng-content><span class="pa"></span>`,
  styleUrls: ['../assets/icon-button.scss'],
  inputs: ['disabled', 'color']
})

export class NgNtIconButtonComponent extends NgNtButtonBase{
  constructor(public elementRef: ElementRef){
    super(elementRef);
  }

  onMouseMove(e:MouseEvent){  
    this.elementRef.nativeElement.querySelector('span.pa').style.top=e.pageY - this.elementRef.nativeElement.offsetTop+'px';
    this.elementRef.nativeElement.querySelector('span.pa').style.left=e.pageX - this.elementRef.nativeElement.offsetLeft+'px';
  }

}
