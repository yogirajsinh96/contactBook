import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AnnouncementsService } from './announcements.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AnnouncementsService', () => {
  let service: AnnouncementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[]
    });
    service = TestBed.inject(AnnouncementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
