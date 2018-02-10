import { CobaikLocation } from "../bike-results/shared/cobaik-location";

export class Bike {
  bike_id             : number;
  brand               : string;
  reference           : string;
  price               : number;
  description         : string;
  categoryDescription: string;
  image_url           : string;
  cobaikLocation     : CobaikLocation;
}
