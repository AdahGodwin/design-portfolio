import { NgModule } from '@angular/core';
import { BrowserModule,} from '@angular/platform-browser';
 

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { DescriptionComponent } from './components/description/description.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomescreenComponent } from './screens/homescreen/homescreen.component';
import { ProjectscreenComponent } from './screens/projectscreen/projectscreen.component';
import { ProjectDetailsScreenComponent } from './screens/projectdetailsscreen/project-details-screen/project-details-screen.component';
import { ProjectIntroComponent } from './screens/projectdetailsscreen/project-intro/project-intro.component';
import { LandingPageComponent } from './screens/projectdetailsscreen/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectImagesComponent } from './screens/projectdetailsscreen/project-images/project-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DescriptionComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    HomescreenComponent,
    ProjectscreenComponent,
    ProjectDetailsScreenComponent,
    ProjectIntroComponent,
    LandingPageComponent,
    FooterComponent,
    ProjectImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
