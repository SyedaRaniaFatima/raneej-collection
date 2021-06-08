import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstitchedComponent } from './unstitched.component';

describe('UnstitchedComponent', () => {
  let component: UnstitchedComponent;
  let fixture: ComponentFixture<UnstitchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnstitchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnstitchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
