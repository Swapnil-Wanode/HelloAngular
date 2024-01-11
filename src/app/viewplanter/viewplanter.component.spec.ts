import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplanterComponent } from './viewplanter.component';

describe('ViewplanterComponent', () => {
  let component: ViewplanterComponent;
  let fixture: ComponentFixture<ViewplanterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewplanterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewplanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
