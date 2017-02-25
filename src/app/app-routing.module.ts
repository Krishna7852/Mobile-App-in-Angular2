import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {Component} from '@angular/core';
import { SignupComponent } from "./signup/signup.component";
import { SigninComponent } from "./signin/signin.component";
import {DisplayComponent} from './display/display.component';
import { ShowdataComponent } from "./showdata/showdata.component";
import { AuthGuard } from "./auth.guard";

@NgModule({
  imports: [
    RouterModule.forRoot([
      // Let's redirect it to default signin page
      { path: '', component: SigninComponent },
      { path: 'display', component: DisplayComponent, canActivate: [AuthGuard] },
      // { path: 'showData', component: ShowdataComponent },

      { path: 'signup', component: SignupComponent },
      { path: 'signin', component: SigninComponent },
      { path: '', redirectTo: '/signin', pathMatch: 'full' },
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
