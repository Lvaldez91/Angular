import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoCorreoComponent } from './seguimiento-correo.component';

describe('SeguimientoCorreoComponent', () => {
  let component: SeguimientoCorreoComponent;
  let fixture: ComponentFixture<SeguimientoCorreoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguimientoCorreoComponent]
    });
    fixture = TestBed.createComponent(SeguimientoCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
