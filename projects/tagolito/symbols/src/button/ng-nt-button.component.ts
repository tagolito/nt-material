import { Component, ElementRef, Input} from '@angular/core';
import { NgButtonBase } from './ngButtonBase';


@Component({
  selector: 'button[ng-nt-button], button[meow]',
  host: {'(mousemove)':'onMouseMove($event)'},
  template: `<ng-content></ng-content><span></span>`,
  styleUrls: ['button.scss'],
  inputs: ['disabled', 'color']
})

export class NgNtButtonComponent extends NgButtonBase{
  @Input('color') colorClass: string = "default";
  isDisabled: boolean = false;
  buttonBackgroundClass: string = "enabled";

  constructor(public elementRef: ElementRef){
    super(elementRef);
  }

  onMouseMove(e:MouseEvent){  
    this.elementRef.nativeElement.querySelector('span').style.top=e.y - this.elementRef.nativeElement.offsetTop+'px';
    this.elementRef.nativeElement.querySelector('span').style.left=e.x - this.elementRef.nativeElement.offsetLeft+'px';
  }

}
