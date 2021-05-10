import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuntentComponent } from './login-auntent.component';

describe('LoginAuntentComponent', () => {
  let component: LoginAuntentComponent;
  let fixture: ComponentFixture<LoginAuntentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAuntentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuntentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
