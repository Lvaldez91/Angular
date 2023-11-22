import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepageComponent } from './onepage.component';

describe('OnepageComponent', () => {
  let component: OnepageComponent;
  let fixture: ComponentFixture<OnepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnepageComponent]
    });
    fixture = TestBed.createComponent(OnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
