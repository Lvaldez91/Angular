import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadernilloComponent } from './cuadernillo.component';

describe('CuadernilloComponent', () => {
  let component: CuadernilloComponent;
  let fixture: ComponentFixture<CuadernilloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadernilloComponent]
    });
    fixture = TestBed.createComponent(CuadernilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
