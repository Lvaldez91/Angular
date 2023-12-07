import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiligenciaLlamadaComponent } from './diligencia-llamada.component';

describe('DiligenciaLlamadaComponent', () => {
  let component: DiligenciaLlamadaComponent;
  let fixture: ComponentFixture<DiligenciaLlamadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiligenciaLlamadaComponent]
    });
    fixture = TestBed.createComponent(DiligenciaLlamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
