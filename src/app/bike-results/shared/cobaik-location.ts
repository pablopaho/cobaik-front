export class CobaikLocation {
  latitude       : number;
  longitude      : number;
  cityDescription: string;

  public constructor(latitude, longitude, cityDescription) {
      this.latitude   = latitude;
      this.longitude  = longitude;
      cityDescription = cityDescription;
  }
}
