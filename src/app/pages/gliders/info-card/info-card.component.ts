import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  standalone: false,
})
export class InfoCardComponent {
  @Input() title = 'Titulo de prueba';
  @Input() subtitle = 'Subtitulo de prueba';
  @Input() image = 'https://dummyimage.com/600x400';
}
