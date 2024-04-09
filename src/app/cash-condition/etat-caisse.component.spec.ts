import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatCaisseComponent } from './etat-caisse.component';

describe('EtatCaisseComponent', () => {
  let component: EtatCaisseComponent;
  let fixture: ComponentFixture<EtatCaisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtatCaisseComponent]
    });
    fixture = TestBed.createComponent(EtatCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
