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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogoselectionComponent } from './admin/logomaker/logoselection/logoselection.component';
import { EditlogoComponent } from './admin/logomaker/logoselection/editlogo/editlogo.component';


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
    AboutusComponent,
    LogoselectionComponent,
    EditlogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
