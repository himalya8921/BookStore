import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybookslistComponent } from './mybookslist.component';

describe('MybookslistComponent', () => {
  let component: MybookslistComponent;
  let fixture: ComponentFixture<MybookslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybookslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MybookslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
