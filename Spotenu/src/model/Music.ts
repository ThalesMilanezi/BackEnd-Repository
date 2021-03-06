export class Music {
  constructor(
    private id: string,
    private name:string,
    private albumId: string
  ) {}

  public getId(): string {
    return this.id
  }
    
  public getName(): string {
    return this.name
  }
  
  public getAlbum(): string {
    return this.albumId
  }
  
}