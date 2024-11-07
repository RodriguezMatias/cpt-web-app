import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-parallax',
  templateUrl: './image-parallax.component.html',
  styleUrls: ['./image-parallax.component.scss'],
})
export class ImageParallaxComponent {
  @Input() text = 'Club de planeadores Tandil';
}
