import { Injectable } from '@angular/core';
import { Glider } from 'src/app/glider';
import { GLIDERS } from './mock-gliders';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GliderService {

  getGliders(): Observable<Glider[]> {
    const glider = of(GLIDERS);
    return glider;
  }

  getGlider(designator:string): Observable<Glider> {
    const gliders : Glider[] = GLIDERS;
    const result = gliders.find(({ gliderDesignator }) => gliderDesignator === designator);
    if(result){
      return of(result);
    }
    throw("Error,"+designator+" not found");  
  }

}
