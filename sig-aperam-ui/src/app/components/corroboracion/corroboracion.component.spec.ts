import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorroboracionComponent } from './corroboracion.component';

describe('CorroboracionComponent', () => {
  let component: CorroboracionComponent;
  let fixture: ComponentFixture<CorroboracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorroboracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorroboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
