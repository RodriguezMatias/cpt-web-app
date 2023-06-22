import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyWithUsComponent } from './fly-with-us.component';

describe('FlyWithUsComponent', () => {
  let component: FlyWithUsComponent;
  let fixture: ComponentFixture<FlyWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyWithUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
