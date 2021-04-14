import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecoownerComponent } from './managecoowner.component';

describe('ManagecoownerComponent', () => {
  let component: ManagecoownerComponent;
  let fixture: ComponentFixture<ManagecoownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecoownerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecoownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
