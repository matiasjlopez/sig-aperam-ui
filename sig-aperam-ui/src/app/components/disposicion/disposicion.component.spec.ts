import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposicionComponent } from './disposicion.component';

describe('DisposicionComponent', () => {
  let component: DisposicionComponent;
  let fixture: ComponentFixture<DisposicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
