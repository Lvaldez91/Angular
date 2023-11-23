import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BInformeComponent } from './b-informe.component';

describe('BInformeComponent', () => {
  let component: BInformeComponent;
  let fixture: ComponentFixture<BInformeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BInformeComponent]
    });
    fixture = TestBed.createComponent(BInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
