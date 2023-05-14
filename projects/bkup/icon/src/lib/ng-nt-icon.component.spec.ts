import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNtIconComponent } from './ng-nt-icon.component';

describe('NgNtIconComponent', () => {
  let component: NgNtIconComponent;
  let fixture: ComponentFixture<NgNtIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgNtIconComponent]
    });
    fixture = TestBed.createComponent(NgNtIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
