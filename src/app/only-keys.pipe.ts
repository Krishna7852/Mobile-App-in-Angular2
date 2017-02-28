import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyKeys'
})
export class OnlyKeysPipe implements PipeTransform {
  transform(value: any): any {
      let keys = [];
      for( let key in value ){
        keys.push(key);
      }
      return keys;
    }
  
}
