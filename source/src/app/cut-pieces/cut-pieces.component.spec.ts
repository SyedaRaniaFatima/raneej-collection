import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutPiecesComponent } from './cut-pieces.component';

describe('CutPiecesComponent', () => {
  let component: CutPiecesComponent;
  let fixture: ComponentFixture<CutPiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutPiecesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutPiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
