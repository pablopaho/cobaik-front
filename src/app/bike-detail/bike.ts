import { CobaikLocation } from "../bike-results/cobaik-location";

export class Bike {
  bike_id: number;
  brand: string;
  reference: string;
  price: number;
  latitude: number;
  longitude: number;
  description: string;
  category_description: string;
  image_url: string;
  cobaik_location: CobaikLocation;
}
