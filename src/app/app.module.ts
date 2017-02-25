import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ShowdataComponent } from "./showdata/showdata.component";
import { AuthGuard } from "./auth.guard";

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from "./auth.service";
import {FirebaseService} from './firebase.service';
// import {DataTableModule} from "angular2-datatable";
import { ReactiveFormsModule} from '@angular/forms';
import { DisplayComponent } from './display/display.component';
    const config = {
      apiKey: "AIzaSyDDWHZp8iUqLiuhXWkQEhByBhsDna942qA",
      authDomain: "mobile-app-angular2.firebaseapp.com",
      databaseURL: "https://mobile-app-angular2.firebaseio.com",
      storageBucket: "mobile-app-angular2.appspot.com",
      messagingSenderId: "109890002449"
    };
    firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ShowdataComponent,
    DisplayComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
	// DataTableModule,
ReactiveFormsModule
  ],

  providers: [ AuthService,FirebaseService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
