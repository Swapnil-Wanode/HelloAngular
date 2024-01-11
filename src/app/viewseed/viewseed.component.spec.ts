import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewseedComponent } from './viewseed.component';

describe('ViewseedComponent', () => {
  let component: ViewseedComponent;
  let fixture: ComponentFixture<ViewseedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewseedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewseedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
