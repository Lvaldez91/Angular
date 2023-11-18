import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreepageComponent } from './threepage.component';

describe('ThreepageComponent', () => {
  let component: ThreepageComponent;
  let fixture: ComponentFixture<ThreepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
