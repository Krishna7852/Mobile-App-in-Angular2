import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from '@angular/router';

@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;
    public token;
    error = false;
    errorMessage = '';
    constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {
      this.myForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required],
      });
    }
    onSignin():void {

      this.authService.signinUser(this.myForm.value).then((res) =>{

        // let token = JSON.stringify('token',res.uid);
        console.log(res)
        this.token=res;
        console.log("refreshToken :-",this.token.refreshToken)
        let token = JSON.stringify('token',this.token.refreshToken);
        localStorage.setItem('token',this.token.refreshToken);
        this.router.navigate(['/display']);

      });
    }
    btnSignUp():void{
  this.router.navigate(['/signup']);
}

    ngOnInit():any {
        this.authService.skipIfLoggedIn();


    }
}
