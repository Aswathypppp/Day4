import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DistrictComponent } from './pages/district/district.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { UtilsComponent } from './pages/utils/utils.component';
import { FooterComponent } from './utils/footer/footer.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { SingleComponent } from './single/single.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DistrictComponent,
    SignupComponent,
    ContactusComponent,
    UtilsComponent,
    FooterComponent,
    NavbarComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
