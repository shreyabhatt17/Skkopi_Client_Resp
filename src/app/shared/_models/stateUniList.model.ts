export class StateUniversitiesList {
  public name: string;
  public address: string;
  public imagePath: string;
  public bigImagePath: string;

  constructor(name: string, address: string, imagePath: string, bigImagePath: string) {
    this.name = name;
    this.address = address;
    this.imagePath = imagePath;
    this.bigImagePath = bigImagePath;
  }
}
