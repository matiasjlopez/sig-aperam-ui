import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlejadoraGrandeComponent } from './flejadora-grande.component';

describe('FlejadoraGrandeComponent', () => {
  let component: FlejadoraGrandeComponent;
  let fixture: ComponentFixture<FlejadoraGrandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlejadoraGrandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlejadoraGrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
