import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { OverviewComponent }      from './overview/overview.component';
import { ExperienceComponent }    from './experience/experience.component';
import { EducationComponent }     from './education/education.component';
import { ProjectsComponent }      from './projects/projects.component';
import { VolunteeringComponent }  from './volunteering/volunteering.component';
import { AboutComponent }         from './about/about.component';

const routes: Routes = [
  { path: '',               redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview',       component: OverviewComponent },
  { path: 'experience',     component: ExperienceComponent },
  { path: 'education',      component: EducationComponent },
  { path: 'projects',       component: ProjectsComponent },
  { path: 'volunteering',   component: VolunteeringComponent },
  { path: 'about',          component: AboutComponent },
  { path: '**',             redirectTo: 'overview' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
