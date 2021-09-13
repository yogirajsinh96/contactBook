import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AddContactService } from './add-contact.service';

describe('AddContactService', () => {
  let service: AddContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[]
    });
    service = TestBed.inject(AddContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
