import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogupAutentComponent } from './logup-autent.component';

describe('LogupAutentComponent', () => {
  let component: LogupAutentComponent;
  let fixture: ComponentFixture<LogupAutentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogupAutentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogupAutentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
