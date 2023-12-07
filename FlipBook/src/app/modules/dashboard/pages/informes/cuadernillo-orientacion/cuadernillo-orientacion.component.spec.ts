import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadernilloOrientacionComponent } from './cuadernillo-orientacion.component';

describe('CuadernilloOrientacionComponent', () => {
  let component: CuadernilloOrientacionComponent;
  let fixture: ComponentFixture<CuadernilloOrientacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuadernilloOrientacionComponent]
    });
    fixture = TestBed.createComponent(CuadernilloOrientacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
