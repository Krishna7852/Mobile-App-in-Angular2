import { Pipe, PipeTransform } from '@angular/core';
import { OnlyKeysPipe } from './only-keys.pipe';
@Pipe({
  name: 'categoryFilter',
    pure: false
})
export class CategoryFilterPipe implements PipeTransform {
  filterByArray = [];

  public filter(filterby, data) {
    let prod = [];
    let count;
    let products = data;
    // console.log(products)
    for (let i in filterby) {

      let deepfilter = filterby[i];
      // console.log('i in filter ', deepfilter);
      // console.log('i ', i);
      count = 0;
      for (let j in filterby[i]) {
        // console.log('j in filter[i] ', j);
        // console.log('filterbr[i][j] ', filterby[i][j], filterby[i]);
        // console.log('count ',count);
        if (count > 0) {
          data.forEach(function (element) {
            // console.log('element in foreach ', element);
            if (filterby[i][j] == element.specs[i])
              prod.push(element);
          });
        }
        else {
          products.forEach(function (element) {
            // console.log('element in foreach ', element);
            if (filterby[i][j] == element.specs[i])
              prod.push(element);
          });
        }
        products = prod;
        count++;
      }
      prod = [];
    }
    return products;
  }

  transform(products: any[], args: string): any {
    let filterby = JSON.parse(args);
    let prod = [];
    let keys = new OnlyKeysPipe().transform(filterby);
    if (typeof products == 'object' && !null) {
      for (let key in keys) {
        let i = keys[key];
        if (filterby[i].length != 0)
          this.filterByArray[key] = i;
      }
      // console.log('filt arr ', this.filterByArray);
      if (filterby != null) {
        // console.log('filteby ', filterby);
        prod = this.filter(filterby, products);
        return prod;
      } else {
        prod = products;
        return prod;
      }
    }
    else {
      console.log('from filter pipe - no its not an object');
    }
    return prod;
  }

}
