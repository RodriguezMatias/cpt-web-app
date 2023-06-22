import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoCardContainerComponent } from './info-card-container/info-card-container.component';
import { MaterialModule } from './material/material.module';
import { EnumeratePipe } from './enumerate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { GliderComponent } from './glider/glider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GliderSidenavComponent } from './glider-sidenav/glider-sidenav.component';

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
    GliderSidenavComponent
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
