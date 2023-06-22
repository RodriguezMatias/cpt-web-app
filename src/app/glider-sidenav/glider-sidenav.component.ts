import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { Glider } from '../glider';

@Component({
  selector: 'app-glider-sidenav',
  templateUrl: './glider-sidenav.component.html',
  styleUrls: ['./glider-sidenav.component.css']
})
export class GliderSidenavComponent implements OnDestroy{

  @Input() gliderArray : Glider[] = [];

  private _mobileQueryListener: () => void;

  mobileQuery: MediaQueryList;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(){
    console.log("glidersArray",this.gliderArray)
  }

}
