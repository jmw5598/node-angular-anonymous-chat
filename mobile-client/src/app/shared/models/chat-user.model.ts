export class ChatUser {
  public id: string;
  public name: string;
  public color: string;

  constructor(id: string, name: string, color: string) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}