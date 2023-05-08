import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'button[ng-nt-button]',
  host: {'(mousemove)':'onMouseMove($event)'},
  template: `<ng-content></ng-content><span #positionAwareness></span>`,
  styles: [
    `:host{
      padding: 16px;
      box-shadow: 3px 3px 8px 3px #ddd;
      border: none;
      border-radius: 24px;
      position: relative;
      display: block;
      overflow: hidden;
      z-index:0;
      cursor: pointer;
      background-color: #fff;
    }
    :host > span {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-radius: 50%;
        background-color: rgb(200 200 200 / 15%);
        z-index: -1;
    }
    :host:active span {
        width: 300%;
        height: 300%;
        -webkit-transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
        transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
        -webkit-transform: translate(-50%, -50%);
    }
    `
  ]
})

export class NgNtButtonComponent {
  @ViewChild('positionAwareness')
  buttonBackground!: ElementRef;
  
  constructor(){}

  onMouseMove(e:MouseEvent){  
    this.buttonBackground.nativeElement.style.top=e.y+'px';
    this.buttonBackground.nativeElement.style.left=e.x+'px';
  }

}
