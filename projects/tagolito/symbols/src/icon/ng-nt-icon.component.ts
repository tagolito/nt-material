import { Component, ElementRef, Input} from '@angular/core';
import { NgNtIconBase } from './ng-nt-icon-base';

@Component({
  selector: 'ng-nt-icon',
  inputs: [{name:'iconStyle', alias:'material-style', required:true}, {name:'size', alias:'icon-size', required:true}, {name:'text', alias:'shown-text', required:false}],
  template: `<span class="icon icon-{{iconStyle}}" style="font-size:{{size}}"><ng-content></ng-content></span><span *ngIf="text.length" class="shown-text" style="line-height:{{size}}">{{text}}</span>`,
  styleUrls: ['../assets/icon.scss']
})

export class NgNtIconComponent extends NgNtIconBase{
  iconStyle: string = "";
  text: string = "";
  size: string = "";

  constructor(public elementRef: ElementRef){
    super(elementRef);
  }

}
