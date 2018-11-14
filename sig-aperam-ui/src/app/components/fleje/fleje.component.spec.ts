import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlejeComponent } from './fleje.component';

describe('FlejeComponent', () => {
  let component: FlejeComponent;
  let fixture: ComponentFixture<FlejeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlejeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlejeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
