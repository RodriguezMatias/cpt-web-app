import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Glider } from '../../../glider';

@Component({
  selector: 'app-info-card-container',
  templateUrl: './info-card-container.component.html',
  styleUrls: ['./info-card-container.component.scss'],

})
export class InfoCardContainerComponent  {
  
  sliderValue = 1;

  //TODO: Refactor this.
  glidersString='[{"gliderMaker":"AcmeGliders","gliderModel":"AG-100","gliderDesignator":"AG1","gliderSize":"Small","photoFilename":"/assets/LV-EJB.png","userManualFilename":"ag-100-user-manual.pdf","maintenanceManualFilename":"ag-100-maintenance-manual.pdf"},{"gliderMaker":"FlyHighGliders","gliderModel":"FH-200","gliderDesignator":"FH2","gliderSize":"Medium","photoFilename":"/assets/fh-200.jpg","userManualFilename":"fh-200-user-manual.pdf","maintenanceManualFilename":"fh-200-maintenance-manual.pdf"},{"gliderMaker":"SkyHawksGliders","gliderModel":"SH-300","gliderDesignator":"SH3","gliderSize":"Large","photoFilename":"sh-300.jpg","userManualFilename":"sh-300-user-manual.pdf","maintenanceManualFilename":"sh-300-maintenance-manual.pdf"},{"gliderMaker":"WingWondersGliders","gliderModel":"WW-400","gliderDesignator":"WW4","gliderSize":"XL","photoFilename":"ww-400.jpg","userManualFilename":"ww-400-user-manual.pdf","maintenanceManualFilename":"ww-400-maintenance-manual.pdf"},{"gliderMaker":"AcmeGliders","gliderModel":"SkyDreamer","gliderDesignator":"SD-123","gliderSize":"Small","photoFilename":"sky_dreamer_small.jpg","userManualFilename":"sky_dreamer_user_manual.pdf","maintenanceManualFilename":"sky_dreamer_maintenance_manual.pdf"},{"gliderMaker":"GliderCorp","gliderModel":"AirKing","gliderDesignator":"AK-456","gliderSize":"Medium","photoFilename":"air_king_medium.jpg","userManualFilename":"air_king_user_manual.pdf","maintenanceManualFilename":"air_king_maintenance_manual.pdf"},{"gliderMaker":"FlyHigh","gliderModel":"SkyCruiser","gliderDesignator":"SC-789","gliderSize":"Large","photoFilename":"sky_cruiser_large.jpg","userManualFilename":"sky_cruiser_user_manual.pdf","maintenanceManualFilename":"sky_cruiser_maintenance_manual.pdf"},{"gliderMaker":"SkySeekerInc","gliderModel":"AirSurfer","gliderDesignator":"AS-321","gliderSize":"Small","photoFilename":"air_surfer_small.jpg","userManualFilename":"air_surfer_user_manual.pdf","maintenanceManualFilename":"air_surfer_maintenance_manual.pdf"},{"gliderMaker":"AcmeGliders","gliderModel":"SkyDreamer","gliderDesignator":"SD-123","gliderSize":"Small","photoFilename":"sky_dreamer_small.jpg","userManualFilename":"sky_dreamer_user_manual.pdf","maintenanceManualFilename":"sky_dreamer_maintenance_manual.pdf"},{"gliderMaker":"GliderCorp","gliderModel":"AirKing","gliderDesignator":"AK-456","gliderSize":"Medium","photoFilename":"air_king_medium.jpg","userManualFilename":"air_king_user_manual.pdf","maintenanceManualFilename":"air_king_maintenance_manual.pdf"},{"gliderMaker":"FlyHigh","gliderModel":"SkyCruiser","gliderDesignator":"SC-789","gliderSize":"Large","photoFilename":"sky_cruiser_large.jpg","userManualFilename":"sky_cruiser_user_manual.pdf","maintenanceManualFilename":"sky_cruiser_maintenance_manual.pdf"},{"gliderMaker":"SkySeekerInc","gliderModel":"AirSurfer","gliderDesignator":"AS-321","gliderSize":"Small","photoFilename":"air_surfer_small.jpg","userManualFilename":"air_surfer_user_manual.pdf","maintenanceManualFilename":"air_surfer_maintenance_manual.pdf"}]';  gliderArray = JSON.parse(this.glidersString) as Glider[];

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
}
