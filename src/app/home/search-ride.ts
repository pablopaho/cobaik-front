export class SearchRide {
  start_date: Date;
  end_date: Date;
  city_description: String;

  public constructor(start_data: Date, end_date: Date,city_description: String) {
    this.start_date = start_data;
    this.end_date = end_date;
    this.city_description = city_description;
  }
}
