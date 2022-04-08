import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeElementComponent } from './shape-element.component';

describe('ShapeElementComponent', () => {
  let component: ShapeElementComponent;
  let fixture: ComponentFixture<ShapeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
