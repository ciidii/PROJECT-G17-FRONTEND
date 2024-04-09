import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSprinnerComponent } from './loading-sprinner.component';

describe('LoadingSprinnerComponent', () => {
  let component: LoadingSprinnerComponent;
  let fixture: ComponentFixture<LoadingSprinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingSprinnerComponent]
    });
    fixture = TestBed.createComponent(LoadingSprinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
