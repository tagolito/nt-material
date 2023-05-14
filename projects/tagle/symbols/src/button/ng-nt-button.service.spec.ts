import { TestBed } from '@angular/core/testing';

import { NgNtButtonService } from './ng-nt-button.service';

describe('NgNtButtonService', () => {
  let service: NgNtButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNtButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
