export class product {
  id : number;
  name : string;
  price : number;
  rating : number;
  description : string;
  image : {
    large : string,
    small : string
  };
  specs : {
    manufacturer : string,
    storage : number,
    os : string,
    camera : number
  };
}
