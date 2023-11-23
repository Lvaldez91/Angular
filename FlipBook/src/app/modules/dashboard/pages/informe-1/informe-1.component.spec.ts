import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe1Component } from './informe-1.component';

describe('Informe1Component', () => {
  let component: Informe1Component;
  let fixture: ComponentFixture<Informe1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Informe1Component]
    });
    fixture = TestBed.createComponent(Informe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
