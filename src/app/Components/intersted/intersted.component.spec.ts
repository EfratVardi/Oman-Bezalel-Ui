import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstedComponent } from './intersted.component';

describe('InterstedComponent', () => {
  let component: InterstedComponent;
  let fixture: ComponentFixture<InterstedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterstedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterstedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
