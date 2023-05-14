import { Component } from '@angular/core';

@Component({
  selector: 'ng-nt-icon',
  template: `
  <ng-content></ng-content>
  `,
  host: {'class':'material-symbols-outlined'},
  styles: []
})
export class NgNtIconComponent {
}
