import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapaComponent } from './chapa.component';

describe('ChapaComponent', () => {
  let component: ChapaComponent;
  let fixture: ComponentFixture<ChapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
