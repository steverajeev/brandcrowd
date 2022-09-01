import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { LogomakerComponent } from './admin/logomaker/logomaker.component';
import { BusinesscardComponent } from './admin/businesscard/businesscard.component';
import { SocialComponent } from './admin/social/social.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { RegisterComponent } from './admin/register/register.component';
import { ContactusComponent } from './admin/contactus/contactus.component';
import { AboutusComponent } from './admin/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogomakerComponent,
    BusinesscardComponent,
    SocialComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ContactusComponent,
    AboutusComponent
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
