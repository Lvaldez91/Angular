import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadainicialComponent } from './portadainicial.component';

describe('PortadainicialComponent', () => {
  let component: PortadainicialComponent;
  let fixture: ComponentFixture<PortadainicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortadainicialComponent]
    });
    fixture = TestBed.createComponent(PortadainicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
