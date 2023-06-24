import { Component, Input, OnInit } from '@angular/core';
import { Glider } from '../../../models/glider';
import { GliderService } from 'src/app/services/glider/glider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-glider',
  templateUrl: './glider.component.html',
  styleUrls: ['./glider.component.scss']
})
export class GliderComponent implements OnInit{

 glider: Glider = {} as Glider;

 constructor(private activeRoute: ActivatedRoute,private router: Router,private gliderService: GliderService) {
    this.getGlider(this.router.url.split('/').pop()!);
 }

 ngOnInit() {
	this.activeRoute.queryParams.subscribe(queryParams => {
		// do something with the query params
	});
	this.activeRoute.params.subscribe(routeParams => {
    let gliderDesignator = this.router.url.split('/').pop()!;
		this.getGlider(gliderDesignator);
	});
}

  getGlider(gliderDesignator:string): void {
    this.gliderService.getGlider(gliderDesignator)
      .subscribe(x => this.glider = x);
  }

}
