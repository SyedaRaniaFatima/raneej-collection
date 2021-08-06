import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarheaderComponent } from './navbarheader/navbarheader.component';
import { SwiperCarouselComponent } from './swiper-carousel/swiper-carousel.component';
import { NewInComponent } from './new-in/new-in.component';
import { LawnComponent } from './lawn/lawn.component';
import { UnstitchedComponent } from './unstitched/unstitched.component';
import { ReadyToWearComponent } from './ready-to-wear/ready-to-wear.component';
import { CutPiecesComponent } from './cut-pieces/cut-pieces.component';
import {RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServeComponent } from './serve/serve.component';
import { SignupComponent } from './login/signup/signup.component';




const appRoutes: Routes =[
  { path:'home', component: HomeComponent},
  { path:'newin', component: NewInComponent},
  { path:'lawn', component: LawnComponent},
  { path:'unstitched', component: UnstitchedComponent},
  { path:'readytowear', component: ReadyToWearComponent},
  { path:'cutpieces', component: CutPiecesComponent},
  { path:'login', component: LoginComponent},
  { path:'signup', component: SignupComponent},


  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
}
  
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarheaderComponent,
    SwiperCarouselComponent,
    NewInComponent,
    LawnComponent,
    UnstitchedComponent,
    ReadyToWearComponent,
    CutPiecesComponent,
    HomeComponent,
    LoginComponent,
    ServeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
   
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
