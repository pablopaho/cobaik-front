export class CobaikLocation {
  latitude        : number;
  longitude       : number;
  city_description: string;

  public constructor(latitude, longitude, city_description) {
      this.latitude    = latitude;
      this.longitude   = longitude;
      city_description = city_description;
  }
}
