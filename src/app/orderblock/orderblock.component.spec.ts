import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderblockComponent } from './orderblock.component';

describe('OrderblockComponent', () => {
  let component: OrderblockComponent;
  let fixture: ComponentFixture<OrderblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
