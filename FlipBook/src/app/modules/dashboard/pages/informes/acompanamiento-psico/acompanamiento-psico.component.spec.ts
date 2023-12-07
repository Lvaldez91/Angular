import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanamientoPsicoComponent } from './acompanamiento-psico.component';

describe('AcompanamientoPsicoComponent', () => {
  let component: AcompanamientoPsicoComponent;
  let fixture: ComponentFixture<AcompanamientoPsicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcompanamientoPsicoComponent]
    });
    fixture = TestBed.createComponent(AcompanamientoPsicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
