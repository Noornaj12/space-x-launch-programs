import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceXLaunchProgramsComponent } from './space-x-launch-programs/space-x-launch-programs.component';


const routes: Routes = [
  { path: '', redirectTo: '/all-programs', pathMatch: 'full' },
  { path: 'all-programs', component: SpaceXLaunchProgramsComponent },
  { path: 'filtered-programs/:launch_year/:launch_success/:land_success', component: SpaceXLaunchProgramsComponent },
  { path: '**', component: SpaceXLaunchProgramsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
