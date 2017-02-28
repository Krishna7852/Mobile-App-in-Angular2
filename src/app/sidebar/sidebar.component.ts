import { Component } from '@angular/core';
import { PassDataService } from '../pass-data.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private passData:PassDataService ) { }

  public data = [
         {
           head: 'manufacturer',
           content: ['Apple', 'Samsung', 'HTC', 'Nokia', 'Sony']
         },
         {
           head: 'storage',
           content: ['16', '32']
         },
         {
           head: 'os',
           content: ['Android', 'iOS', 'Windows']
         },
         {
           head: 'camera',
           content: ['5', '8', '12', '15']
         }
    ];

     public pretyPoint = {
       manufacturer:[],
       storage:[],
       os:[],
       camera:[]
     };

     getProperty(filter){
      //  console.log(filter);
       return this.pretyPoint[filter];
     }

     setProperty(value){
      //  console.log(value)
       this.passData.setData(JSON.stringify(value));
     }

     checkedC(filter,val){
      //  console.log(filter,val)

         let key = this.getProperty(filter);
        //  console.log(' key ' , key)
         if ((<HTMLInputElement>document.getElementById(val)).checked === true) {
             key.push(val);
         }
         else{
             if ((<HTMLInputElement>document.getElementById(val)).checked === false) {
                 let uncheck = key.indexOf(val);
                //  console.log('uncheck',uncheck)
                 key.splice(uncheck,1);
             }
         }
         this.setProperty(this.pretyPoint);
     }
     clearAll(){
         this.pretyPoint = {
           manufacturer:[],
           storage:[],
           os:[],
           camera:[]
         };
         this.setProperty(this.pretyPoint);
     }

}
