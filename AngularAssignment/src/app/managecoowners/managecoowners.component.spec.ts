import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecoownersComponent } from './managecoowners.component';

describe('ManagecoownersComponent', () => {
  let component: ManagecoownersComponent;
  let fixture: ComponentFixture<ManagecoownersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecoownersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecoownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
