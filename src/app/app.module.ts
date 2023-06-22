import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCardComponent } from './pages/gliders/info-card/info-card.component';
import { InfoCardContainerComponent } from './pages/gliders/info-card-container/info-card-container.component';
import { MaterialModule } from './shared/material/material.module';
import { EnumeratePipe } from './enumerate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { GliderComponent } from './pages/gliders/glider/glider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GliderSidenavComponent } from './pages/gliders/glider-sidenav/glider-sidenav.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FlyWithUsComponent } from './pages/fly-with-us/fly-with-us.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    InfoCardContainerComponent,
    EnumeratePipe,
    ToolbarComponent,
    FooterComponent,
    GliderComponent,
    WelcomeComponent,
    GliderSidenavComponent,
    ContactUsComponent,
    FlyWithUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    MediaMatcher,
    MediaQueryList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
