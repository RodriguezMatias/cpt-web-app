import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  matVersion: string = '5.1.0';
  breakpoint = 0;

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 1200 ? 1 : 2;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 1200 ? 1 : 2;
  }
}
