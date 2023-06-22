import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GliderComponent } from './glider/glider.component';
import { InfoCardContainerComponent } from './info-card-container/info-card-container.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'glider/:designator', component: GliderComponent },
  { path: 'glider', component: InfoCardContainerComponent },
  { path: '' , component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
