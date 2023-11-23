import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe4Component } from './informe-4.component';

describe('Informe4Component', () => {
  let component: Informe4Component;
  let fixture: ComponentFixture<Informe4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Informe4Component]
    });
    fixture = TestBed.createComponent(Informe4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
