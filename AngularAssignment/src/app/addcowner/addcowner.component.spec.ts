import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcownerComponent } from './addcowner.component';

describe('AddcownerComponent', () => {
  let component: AddcownerComponent;
  let fixture: ComponentFixture<AddcownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
