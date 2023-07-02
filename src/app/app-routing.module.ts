import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GliderComponent } from './pages/gliders/glider/glider.component';
import { InfoCardContainerComponent } from './pages/gliders/info-card-container/info-card-container.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FlyWithUsComponent } from './pages/fly-with-us/fly-with-us.component';
import { PagenotfoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'aeronaves', component: InfoCardContainerComponent },
  { path: 'aeronaves/:designator', component: GliderComponent },
  { path: 'informacion', component: FlyWithUsComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
