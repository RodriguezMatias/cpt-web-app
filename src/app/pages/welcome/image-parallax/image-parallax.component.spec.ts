import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageParallaxComponent } from './image-parallax.component';

describe('ImageParallaxComponent', () => {
  let component: ImageParallaxComponent;
  let fixture: ComponentFixture<ImageParallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageParallaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
