import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http';
import * as Rx from 'rxjs/Rx';
import {FirebaseService} from '../firebase.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  // @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  public mobileLarge: any = {};
  public specs: any = {};
  public largeImage: any = {};

  public data: any;
  constructor(private firebaseService: FirebaseService) {

  }
  btnShowData(id): void {

    for (var i in this.data) {
      if (id == this.data[i].id) {
        this.mobileLarge = this.data[i];

        // get perticular object specification
        this.specs = this.data[i].specs;
        console.log(this.mobileLarge)

        // for images
        this.largeImage = this.data[i].image.large;
      }
    }
  }
  ngOnInit() {
    this.firebaseService.onJsonData()
      .subscribe((data) => {
        this.data = data.json();
        console.log(data);
      });
  }

}
