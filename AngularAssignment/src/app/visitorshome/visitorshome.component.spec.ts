import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorshomeComponent } from './visitorshome.component';

describe('VisitorshomeComponent', () => {
  let component: VisitorshomeComponent;
  let fixture: ComponentFixture<VisitorshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
