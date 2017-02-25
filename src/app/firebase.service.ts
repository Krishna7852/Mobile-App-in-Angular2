import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class FirebaseService {
public data:any;
  constructor(private http:Http) {}

onJsonData(){
return this.http.get("https://mobile-app-angular2.firebaseio.com/.json ")

      }
}
