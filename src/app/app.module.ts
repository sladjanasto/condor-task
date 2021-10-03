import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { ContactComponent } from './contact/contact.component';
import { WhyusComponent } from './whyus/whyus.component';
import { ProgramComponent } from './program/program.component';
import { PlansComponent } from './plans/plans.component';
import { SubCommisionComponent } from './sub-commision/sub-commision.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { BrandmenuComponent } from './brandmenu/brandmenu.component';

import { CarouselModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BrandsComponent,
    ContactComponent,
    WhyusComponent,
    ProgramComponent,
    PlansComponent,
    SubCommisionComponent,
    TestimonialsComponent,
    BrandmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [ Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
