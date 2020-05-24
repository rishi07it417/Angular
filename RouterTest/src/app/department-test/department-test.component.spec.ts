import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTestComponent } from './department-test.component';

describe('DepartmentTestComponent', () => {
  let component: DepartmentTestComponent;
  let fixture: ComponentFixture<DepartmentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
