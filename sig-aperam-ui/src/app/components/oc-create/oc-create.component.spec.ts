import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcCreateComponent } from './oc-create.component';

describe('OcCreateComponent', () => {
  let component: OcCreateComponent;
  let fixture: ComponentFixture<OcCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
