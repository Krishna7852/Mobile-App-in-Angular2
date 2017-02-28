import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import {isUndefined} from "util";
@Injectable()
export class PassDataService {

  constructor() { }
  setData(data){
      localStorage.setItem('filter',data);
  };

  getData(){
      let a = localStorage.getItem('filter');
      // console.log(a)
      return a;
  }
}
