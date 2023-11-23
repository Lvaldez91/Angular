import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe3Component } from './informe-3.component';

describe('Informe3Component', () => {
  let component: Informe3Component;
  let fixture: ComponentFixture<Informe3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Informe3Component]
    });
    fixture = TestBed.createComponent(Informe3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
