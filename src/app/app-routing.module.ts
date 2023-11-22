import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/create_profile', pathMatch: 'full' },
  {path:'create_profile',component:CreateProfileComponent},
  {path:'read_profile',component:ReadProfileComponent},
  {path:'update_profile/:id',component:UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
