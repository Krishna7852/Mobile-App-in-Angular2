import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from "./auth.guard";
import { PassDataService } from './pass-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from "./auth.service";
import {FirebaseService} from './firebase.service';
import { ReactiveFormsModule} from '@angular/forms';
import {SidebarComponent } from './sidebar/sidebar.component';
import { DisplayComponent } from './display/display.component';
import { CategoryFilterPipe } from './category-filter.pipe';
import { OnlyKeysPipe } from './only-keys.pipe';
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
    DisplayComponent,
    SidebarComponent,
    CategoryFilterPipe,
    OnlyKeysPipe


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
ReactiveFormsModule
  ],

  providers: [ AuthService,FirebaseService,PassDataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
