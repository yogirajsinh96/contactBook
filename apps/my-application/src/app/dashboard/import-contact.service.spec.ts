import { TestBed } from '@angular/core/testing';

import { ImportContactService } from './import-contact.service';

describe('ImportContactService', () => {
  let service: ImportContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
