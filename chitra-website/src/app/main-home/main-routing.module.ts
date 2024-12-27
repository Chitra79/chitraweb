import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ToolsComponent } from './tools/tools.component';
import { BaseComponent } from './base/base.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  },
  { path: 'contact', component: ContactComponent },
  
  { path: 'projects', component: ProjectsComponent },

  {
    path: 'service', component: ServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
