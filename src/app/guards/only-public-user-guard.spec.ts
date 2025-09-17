import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { onlyPublicUserGuard } from './only-public-user-guard';

describe('onlyPublicUserGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlyPublicUserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
