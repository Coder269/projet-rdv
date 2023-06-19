import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvlistComponent } from './rdvlist.component';

describe('RdvlistComponent', () => {
  let component: RdvlistComponent;
  let fixture: ComponentFixture<RdvlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdvlistComponent]
    });
    fixture = TestBed.createComponent(RdvlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
