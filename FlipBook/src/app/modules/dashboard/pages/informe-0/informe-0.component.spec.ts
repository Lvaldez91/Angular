import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe0Component } from './informe-0.component';

describe('Informe0Component', () => {
  let component: Informe0Component;
  let fixture: ComponentFixture<Informe0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Informe0Component]
    });
    fixture = TestBed.createComponent(Informe0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
