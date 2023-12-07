import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSesionComponent } from './info-sesion.component';

describe('InfoSesionComponent', () => {
  let component: InfoSesionComponent;
  let fixture: ComponentFixture<InfoSesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSesionComponent]
    });
    fixture = TestBed.createComponent(InfoSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
