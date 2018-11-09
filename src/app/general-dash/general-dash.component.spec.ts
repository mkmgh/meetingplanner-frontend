import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDashComponent } from './general-dash.component';

describe('GeneralDashComponent', () => {
  let component: GeneralDashComponent;
  let fixture: ComponentFixture<GeneralDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
