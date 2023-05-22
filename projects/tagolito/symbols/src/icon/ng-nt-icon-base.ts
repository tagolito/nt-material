import { Directive, ElementRef } from "@angular/core";

@Directive()
export class NgNtIconBase {
    constructor(
        public _elementRef: ElementRef
    ) {}

}