import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {
  path:'',component:HomepageComponent
  },
  {
    path:'contactus',component:ContactusComponent
  },
  {
    path:'district',component:DistrictComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'single',component:SingleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
