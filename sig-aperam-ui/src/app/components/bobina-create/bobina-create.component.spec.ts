import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BobinaCreateComponent } from './bobina-create.component';

describe('BobinaCreateComponent', () => {
  let component: BobinaCreateComponent;
  let fixture: ComponentFixture<BobinaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BobinaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobinaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
