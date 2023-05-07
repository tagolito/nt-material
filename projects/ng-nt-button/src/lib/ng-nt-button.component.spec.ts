import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNtButtonComponent } from './ng-nt-button.component';

describe('NgNtButtonComponent', () => {
  let component: NgNtButtonComponent;
  let fixture: ComponentFixture<NgNtButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgNtButtonComponent]
    });
    fixture = TestBed.createComponent(NgNtButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
