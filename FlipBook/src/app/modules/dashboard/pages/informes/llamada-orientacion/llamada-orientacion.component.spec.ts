import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadaOrientacionComponent } from './llamada-orientacion.component';

describe('LlamadaOrientacionComponent', () => {
  let component: LlamadaOrientacionComponent;
  let fixture: ComponentFixture<LlamadaOrientacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LlamadaOrientacionComponent]
    });
    fixture = TestBed.createComponent(LlamadaOrientacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
