import { Component, OnInit } from '@angular/core';
import { Glider } from '../../../models/glider';
import { GliderService } from 'src/app/services/glider/glider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-glider',
  templateUrl: './glider.component.html',
  styleUrls: ['./glider.component.scss'],
})
export class GliderComponent implements OnInit {
  glider: Glider = {} as Glider;
  gliderDesignator?: string;


  constructor(private activeRoute: ActivatedRoute, private router: Router, private gliderService: GliderService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(() => {
      this.gliderDesignator = this.router.url.split('/').pop() ?? '';
      this.getGlider(this.gliderDesignator);
    });
  }

  getGlider(gliderDesignator: string): void {
    this.gliderService.getGlider(gliderDesignator).subscribe((x) => (this.glider = x));
  }
}
