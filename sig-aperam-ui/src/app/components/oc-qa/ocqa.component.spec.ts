import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OCQAComponent } from './ocqa.component';

describe('OCQAComponent', () => {
  let component: OCQAComponent;
  let fixture: ComponentFixture<OCQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OCQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OCQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
