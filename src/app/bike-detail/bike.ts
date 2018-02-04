import { CobaikLocation } from "../bike-results/shared/cobaik-location";

export class Bike {
  bike_id: number;
  brand: string;
  reference: string;
  price: number;
  description: string;
  category_description: string;
  image_url: string;
  cobaik_location: CobaikLocation;
}
