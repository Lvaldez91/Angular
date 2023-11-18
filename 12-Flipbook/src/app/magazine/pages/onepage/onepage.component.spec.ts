import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnepageComponent } from './onepage.component';

describe('OnepageComponent', () => {
  let component: OnepageComponent;
  let fixture: ComponentFixture<OnepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
