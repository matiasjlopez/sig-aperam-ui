import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MecesaComponent } from './mecesa.component';

describe('MecesaComponent', () => {
  let component: MecesaComponent;
  let fixture: ComponentFixture<MecesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MecesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MecesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
