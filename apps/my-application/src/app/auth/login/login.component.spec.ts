import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';


  import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(" check function",()=>{
    expect(component.chk).toBeDefined();
  })

  it(" check email",()=>{
    expect(component.email).toBeDefined();

    component.email="abc@abc.com";
    expect(component.email).not.toBe("");


  })

  it("check password",()=>{
    expect(component.password).toBeDefined();

    component.password="abc";
    expect(component.password).not.toBe("");

  })






});