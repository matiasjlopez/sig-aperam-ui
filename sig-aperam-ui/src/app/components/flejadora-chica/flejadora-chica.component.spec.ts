import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlejadoraChicaComponent } from './flejadora-chica.component';

describe('FlejadoraChicaComponent', () => {
  let component: FlejadoraChicaComponent;
  let fixture: ComponentFixture<FlejadoraChicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlejadoraChicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlejadoraChicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
