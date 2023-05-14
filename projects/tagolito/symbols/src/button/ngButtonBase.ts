import { AfterViewInit, Directive, ElementRef, inject, OnDestroy } from "@angular/core";
import {FocusMonitor, FocusOrigin} from '@angular/cdk/a11y';



@Directive()
export class NgButtonBase implements AfterViewInit, OnDestroy{
    private readonly _focusMonitor = inject(FocusMonitor);
    
    constructor(
        public _elementRef: ElementRef
    ) {}

    ngOnDestroy(): void {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    ngAfterViewInit(): void {
        this._focusMonitor.monitor(this._elementRef, true);
    }

    focus(_origin: FocusOrigin = 'program', options?: FocusOptions): void {
        if (_origin) {
          this._focusMonitor.focusVia(this._elementRef.nativeElement, _origin, options);
        } else {
          this._elementRef.nativeElement.focus(options);
        }
    }



}