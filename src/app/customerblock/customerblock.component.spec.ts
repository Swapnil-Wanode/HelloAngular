import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerblockComponent } from './customerblock.component';

describe('CustomerblockComponent', () => {
  let component: CustomerblockComponent;
  let fixture: ComponentFixture<CustomerblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
