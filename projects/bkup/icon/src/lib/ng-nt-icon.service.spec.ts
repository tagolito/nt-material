import { TestBed } from '@angular/core/testing';

import { NgNtIconService } from './ng-nt-icon.service';

describe('NgNtIconService', () => {
  let service: NgNtIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNtIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
