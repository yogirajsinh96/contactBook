import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactlistComponent } from '../contactlist.component';

 
import { DisplayContactComponent } from './display-contact.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ImportContactComponent } from '../import-contact/import-contact.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { HttpTestingController } from '@angular/common/http/testing';


describe('DisplayContactComponent', () => {
  let component: DisplayContactComponent;
  let fixture: ComponentFixture<DisplayContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [ DisplayContactComponent ],
      providers:[ContactlistComponent,ImportContactComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
