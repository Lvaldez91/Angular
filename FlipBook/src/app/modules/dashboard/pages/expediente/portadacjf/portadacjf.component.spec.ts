import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadacjfComponent } from './portadacjf.component';

describe('PortadacjfComponent', () => {
  let component: PortadacjfComponent;
  let fixture: ComponentFixture<PortadacjfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortadacjfComponent]
    });
    fixture = TestBed.createComponent(PortadacjfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
