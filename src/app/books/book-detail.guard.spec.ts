import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { bookDetailGuard } from './book-detail.guard';

describe('bookDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => bookDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
