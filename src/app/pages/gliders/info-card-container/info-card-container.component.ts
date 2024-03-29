import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Glider } from '../../../models/glider';
import { GliderService } from 'src/app/services/glider/glider.service';

@Component({
  selector: 'app-info-card-container',
  templateUrl: './info-card-container.component.html',
  styleUrls: ['./info-card-container.component.scss'],
})
export class InfoCardContainerComponent {
  sliderValue = 1;

  private _mobileQueryListener: () => void;

  gliderArray: Glider[] = [];

  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, gliderService: GliderService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    gliderService.getGliders().subscribe((gliders) => (this.gliderArray = gliders));
  }

  OnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
