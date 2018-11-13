import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OTQAComponent } from './otqa.component';

describe('OTQAComponent', () => {
  let component: OTQAComponent;
  let fixture: ComponentFixture<OTQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OTQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
