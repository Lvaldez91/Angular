import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderinformeComponent } from './headerinforme.component';

describe('HeaderinformeComponent', () => {
  let component: HeaderinformeComponent;
  let fixture: ComponentFixture<HeaderinformeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderinformeComponent]
    });
    fixture = TestBed.createComponent(HeaderinformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
