import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe2Component } from './informe-2.component';

describe('Informe2Component', () => {
  let component: Informe2Component;
  let fixture: ComponentFixture<Informe2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Informe2Component]
    });
    fixture = TestBed.createComponent(Informe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
