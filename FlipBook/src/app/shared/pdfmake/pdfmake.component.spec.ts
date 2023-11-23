import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfmakeComponent } from './pdfmake.component';

describe('PdfmakeComponent', () => {
  let component: PdfmakeComponent;
  let fixture: ComponentFixture<PdfmakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfmakeComponent]
    });
    fixture = TestBed.createComponent(PdfmakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
