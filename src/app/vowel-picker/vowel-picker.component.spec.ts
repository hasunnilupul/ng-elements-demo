import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VowelPickerComponent } from './vowel-picker.component';

describe('VowelPickerComponent', () => {
  let component: VowelPickerComponent;
  let fixture: ComponentFixture<VowelPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VowelPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VowelPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
