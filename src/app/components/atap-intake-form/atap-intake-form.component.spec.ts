import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtapIntakeFormComponent } from './atap-intake-form.component';

describe('AtapIntakeFormComponent', () => {
  let component: AtapIntakeFormComponent;
  let fixture: ComponentFixture<AtapIntakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtapIntakeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtapIntakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
