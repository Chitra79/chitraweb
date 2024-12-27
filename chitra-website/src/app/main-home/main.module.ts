import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { AboutComponent } from './about/about.component';
import { BaseComponent } from './base/base.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HireComponent } from './hire/hire.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ToolsComponent } from './tools/tools.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service/service.component';




@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BaseComponent,
    HireComponent,
    ProjectsComponent,
    ToolsComponent,
    ContactComponent,
    FooterComponent,
    ExperienceComponent,
    SkillsComponent,
    TestimonialComponent,
    ServiceComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MainRoutingModule,
    MatGridListModule,
    FontAwesomeModule, 
   

  ]
})
export class MainModule { }
