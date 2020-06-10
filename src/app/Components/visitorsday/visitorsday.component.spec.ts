import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsdayComponent } from './visitorsday.component';

describe('VisitorsdayComponent', () => {
  let component: VisitorsdayComponent;
  let fixture: ComponentFixture<VisitorsdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
