import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { Glider } from '../../../models/glider';
import { GliderService } from 'src/app/services/glider/glider.service';

@Component({
  selector: 'app-glider-sidenav',
  templateUrl: './glider-sidenav.component.html',
  styleUrls: ['./glider-sidenav.component.scss'],
  standalone: false,
})
export class GliderSidenavComponent implements OnDestroy {
  private _mobileQueryListener: () => void;

  mobileQuery: MediaQueryList;

  gliderArray: Glider[] = [];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private gliderService: GliderService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.getGliders();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getGliders(): void {
    this.gliderService.getGliders().subscribe((gliders) => (this.gliderArray = gliders));
  }
}
