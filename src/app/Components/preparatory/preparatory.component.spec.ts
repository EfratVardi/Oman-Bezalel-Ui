import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparatoryComponent } from './preparatory.component';

describe('PreparatoryComponent', () => {
  let component: PreparatoryComponent;
  let fixture: ComponentFixture<PreparatoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparatoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
