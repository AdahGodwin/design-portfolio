import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './screens/homescreen/homescreen.component';
import { ProjectscreenComponent } from './screens/projectscreen/projectscreen.component';
import { ProjectDetailsScreenComponent } from './screens/projectdetailsscreen/project-details-screen/project-details-screen.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: "full"},
  {path:'home', component: HomescreenComponent,},
  {path:'projects', component: ProjectscreenComponent,},
  {path: 'projectdetails', component: ProjectDetailsScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
