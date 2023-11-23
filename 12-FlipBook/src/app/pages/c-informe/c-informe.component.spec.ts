import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInformeComponent } from './c-informe.component';

describe('CInformeComponent', () => {
  let component: CInformeComponent;
  let fixture: ComponentFixture<CInformeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CInformeComponent]
    });
    fixture = TestBed.createComponent(CInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
