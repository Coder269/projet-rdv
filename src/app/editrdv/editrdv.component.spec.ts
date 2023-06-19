import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrdvComponent } from './editrdv.component';

describe('EditrdvComponent', () => {
  let component: EditrdvComponent;
  let fixture: ComponentFixture<EditrdvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditrdvComponent]
    });
    fixture = TestBed.createComponent(EditrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
