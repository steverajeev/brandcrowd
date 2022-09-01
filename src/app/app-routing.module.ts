import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './admin/aboutus/aboutus.component';
import { BusinesscardComponent } from './admin/businesscard/businesscard.component';
import { ContactusComponent } from './admin/contactus/contactus.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HeaderComponent } from './admin/header/header.component';
import { LoginComponent } from './admin/login/login.component';
import { LogomakerComponent } from './admin/logomaker/logomaker.component';
import { RegisterComponent } from './admin/register/register.component';
import { SocialComponent } from './admin/social/social.component';

const routes: Routes = [
  {path :'', component:LogomakerComponent},
  {path:'logomaker',component:LogomakerComponent},
  {path:'business',component:BusinesscardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent},
  {path:'social',component:SocialComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
