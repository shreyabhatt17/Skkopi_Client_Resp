export class UniversitiesList {
  public statecode: string;
  public count: number;
  public statename: string;

  constructor(statecode: string, count: number, statename: string) {
    this.statecode = statename;
    this.count = count;
    this.statename = statename;
  }
}
