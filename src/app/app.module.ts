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
import { AppRoutingModule } from './app-routing.module';
import { GliderComponent } from './pages/gliders/glider/glider.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GliderSidenavComponent } from './pages/gliders/glider-sidenav/glider-sidenav.component';
import { FlyWithUsComponent } from './pages/fly-with-us/fly-with-us.component';
import { PagenotfoundComponent } from './pages/page-not-found/page-not-found.component';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { ImageParallaxComponent } from './pages/welcome/image-parallax/image-parallax.component';
import { SocialCardComponent } from './pages/welcome/social-card/social-card.component';
import { ButtonMenuComponent } from './pages/welcome/button-menu/button-menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { InstagramFeedComponent } from './shared/components/instagram-feed/instagram-feed.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoCardComponent,
    InfoCardContainerComponent,
    EnumeratePipe,
    ToolbarComponent,
    GliderComponent,
    WelcomeComponent,
    GliderSidenavComponent,
    FlyWithUsComponent,
    PagenotfoundComponent,
    ParallaxDirective,
    ImageParallaxComponent,
    SocialCardComponent,
    ButtonMenuComponent,
    ContactComponent,
    ActivitiesComponent,
    InstagramFeedComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [MediaMatcher, MediaQueryList],
  bootstrap: [AppComponent],
})
export class AppModule {}
