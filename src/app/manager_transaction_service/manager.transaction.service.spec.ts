import { TestBed } from '@angular/core/testing';

import { ManagerTransactionService } from './manager.transaction.service';

describe('ManagerTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerTransactionService = TestBed.get(ManagerTransactionService);
    expect(service).toBeTruthy();
  });
});
