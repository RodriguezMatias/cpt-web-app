import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-parallax',
  templateUrl: './image-parallax.component.html',
  styleUrls: ['./image-parallax.component.scss'],
})
export class ImageParallaxComponent {
  @Input() text = '¡Bienvenido al sitio web del club, aqui encontraras toda la informacion necesaria para realizar la actividad!';
}
