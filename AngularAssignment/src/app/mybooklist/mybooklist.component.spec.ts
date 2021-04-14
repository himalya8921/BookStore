import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybooklistComponent } from './mybooklist.component';

describe('MybooklistComponent', () => {
  let component: MybooklistComponent;
  let fixture: ComponentFixture<MybooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybooklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
