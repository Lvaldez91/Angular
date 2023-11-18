import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageoneComponent } from './pageone.component';

describe('PageoneComponent', () => {
  let component: PageoneComponent;
  let fixture: ComponentFixture<PageoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageoneComponent]
    });
    fixture = TestBed.createComponent(PageoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
