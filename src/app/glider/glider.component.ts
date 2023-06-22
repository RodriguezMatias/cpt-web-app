import { Component, Input } from '@angular/core';
import { Glider } from '../glider';

@Component({
  selector: 'app-glider',
  templateUrl: './glider.component.html',
  styleUrls: ['./glider.component.scss']
})
export class GliderComponent {

 //TODO: Refactor this.
 glidersString='[{"gliderMaker":"AcmeGliders","gliderModel":"AG-100","gliderDesignator":"AG1","gliderSize":"Small","photoFilename":"/assets/LV-EJB.png","userManualFilename":"ag-100-user-manual.pdf","maintenanceManualFilename":"ag-100-maintenance-manual.pdf"},{"gliderMaker":"FlyHighGliders","gliderModel":"FH-200","gliderDesignator":"FH2","gliderSize":"Medium","photoFilename":"/assets/fh-200.jpg","userManualFilename":"fh-200-user-manual.pdf","maintenanceManualFilename":"fh-200-maintenance-manual.pdf"},{"gliderMaker":"SkyHawksGliders","gliderModel":"SH-300","gliderDesignator":"SH3","gliderSize":"Large","photoFilename":"sh-300.jpg","userManualFilename":"sh-300-user-manual.pdf","maintenanceManualFilename":"sh-300-maintenance-manual.pdf"},{"gliderMaker":"WingWondersGliders","gliderModel":"WW-400","gliderDesignator":"WW4","gliderSize":"XL","photoFilename":"ww-400.jpg","userManualFilename":"ww-400-user-manual.pdf","maintenanceManualFilename":"ww-400-maintenance-manual.pdf"},{"gliderMaker":"AcmeGliders","gliderModel":"SkyDreamer","gliderDesignator":"SD-123","gliderSize":"Small","photoFilename":"sky_dreamer_small.jpg","userManualFilename":"sky_dreamer_user_manual.pdf","maintenanceManualFilename":"sky_dreamer_maintenance_manual.pdf"},{"gliderMaker":"GliderCorp","gliderModel":"AirKing","gliderDesignator":"AK-456","gliderSize":"Medium","photoFilename":"air_king_medium.jpg","userManualFilename":"air_king_user_manual.pdf","maintenanceManualFilename":"air_king_maintenance_manual.pdf"},{"gliderMaker":"FlyHigh","gliderModel":"SkyCruiser","gliderDesignator":"SC-789","gliderSize":"Large","photoFilename":"sky_cruiser_large.jpg","userManualFilename":"sky_cruiser_user_manual.pdf","maintenanceManualFilename":"sky_cruiser_maintenance_manual.pdf"},{"gliderMaker":"SkySeekerInc","gliderModel":"AirSurfer","gliderDesignator":"AS-321","gliderSize":"Small","photoFilename":"air_surfer_small.jpg","userManualFilename":"air_surfer_user_manual.pdf","maintenanceManualFilename":"air_surfer_maintenance_manual.pdf"},{"gliderMaker":"AcmeGliders","gliderModel":"SkyDreamer","gliderDesignator":"SD-123","gliderSize":"Small","photoFilename":"sky_dreamer_small.jpg","userManualFilename":"sky_dreamer_user_manual.pdf","maintenanceManualFilename":"sky_dreamer_maintenance_manual.pdf"},{"gliderMaker":"GliderCorp","gliderModel":"AirKing","gliderDesignator":"AK-456","gliderSize":"Medium","photoFilename":"air_king_medium.jpg","userManualFilename":"air_king_user_manual.pdf","maintenanceManualFilename":"air_king_maintenance_manual.pdf"},{"gliderMaker":"FlyHigh","gliderModel":"SkyCruiser","gliderDesignator":"SC-789","gliderSize":"Large","photoFilename":"sky_cruiser_large.jpg","userManualFilename":"sky_cruiser_user_manual.pdf","maintenanceManualFilename":"sky_cruiser_maintenance_manual.pdf"},{"gliderMaker":"SkySeekerInc","gliderModel":"AirSurfer","gliderDesignator":"AS-321","gliderSize":"Small","photoFilename":"air_surfer_small.jpg","userManualFilename":"air_surfer_user_manual.pdf","maintenanceManualFilename":"air_surfer_maintenance_manual.pdf"}]'; 
 gliderArray = JSON.parse(this.glidersString) as Glider[];
 image = '';

 glider: Glider = {
   gliderMaker: 'Test',
   gliderDesignator: 'Test',
   gliderSize: 'Test',
   photoFilename: 'Test',
   userManualFilename: 'Test',
   maintenanceManualFilename: 'Test'
 };

 shortDescription = 'El planeador IS 28 B2 LV-ERJ fue comprado en el año 2011 al Club Planeadores Bolivar. Desde entonces este planeador lo vuelan pilotos socios del Club Planeadores Bariloche, si bien ha sido afectado principalmente a la instrucción de alumnos pilotos, también se utiliza para vuelo de entrenamiento y para sacar de vuelos de bautismo.';

 longDescription = 'IMPORTANTE    Antes de volar el planeador por primera vez, o si el piloto no se encuentra familiarizado con esta aeronave, recomendamos leer el manual de vuelo que puede descargar desde esta página o que encontrará impreso arriba del planeador, tomarse unos minutos para hacer  cabina y sacarse cualquier duda con un  Instructor del Club. Recalcamos la importancia para el piloto de conocer las condiciones de vuelo, límites de la aeronave y estar plenamente familiarizado con los controles, instrumentos y otros elementos de la cabina antes de emprender vuelo.    Datos generales:    Origen: República de Rumania.    Fabricante: Intreprinderea de Constructii Aeronautice (ICA) Brasov    Construcción: Biplaza doble comando, ala media, cola en "T", totalmente metálico, alas monolargero    Características:    Número de plazas: 2    Envergadura: 17.00 m    Largo fuselaje: 8.72 m    Superficie alar: 18.24 m2    Diedro: 2.5 °    Cuerda de raiz: 1.46 m    Cuerda de extremo: 0.65 m    Cuerda media: 1.13 m    Perfil alar: FX-61-163 raiz y 60-126 extremo marginal    Flaps: Posición neutral (0°), 3 puntos flap positivos (5°, 10° y 15°) y 1 punto flap negativo (-5°)    Superficie alerones: 2.56 m2    Superficie empenaje: Estabilizador horizontal: 1.37 m2, elevador 1.36 m2, estabilizador vertical: 0.68 m2, timón de dirección 0.81 m2    Tipo frenos aerodinámicos: Lado superior e inferior alas    Tren de aterrizaje: Medio retractable, amortiguación aire-aceite y rueda de cola.    Peso vacío: 400 kg    Peso máximo: 590 kg    Pérformance:    Relación óptima de planeo: 1:34 a 94 Km/h    Velocidad mínima de descenso: 0.76 m/seg    Velocidad pérdida sin flaps y peso máximo: 70 km/h    Velocidad pérdida en configuración aterrizaje: 65 km/h    Velocidad máxima (VNE): 230 km/h    Velocidad máxima con aire turbulento: 165 km/h    Velocidad máxima con flap todo abajo: 130 km/h';

 
 ngOnInit(){
  console.log("GliderComponent",this.gliderArray)
  this.glider = this.gliderArray[0];
  }

}
