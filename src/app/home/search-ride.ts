export class SearchRide {
  start_date       : Date;
  end_date         : Date;
  city_description : any;

  public constructor(city_description: String) {
    var dateNow  = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.start_date       = dateNow;
    this.end_date         = tomorrow;
    this.city_description = city_description;
  }
}
