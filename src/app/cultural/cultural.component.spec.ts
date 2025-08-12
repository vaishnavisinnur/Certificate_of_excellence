import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalComponent } from './cultural.component';

describe('CulturalComponent', () => {
  let component: CulturalComponent;
  let fixture: ComponentFixture<CulturalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturalComponent]
    });
    fixture = TestBed.createComponent(CulturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
