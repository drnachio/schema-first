export class Uuid {
  public getId(): string {
    return `${Math.random()}`.replace('0.','');
  }
}
export default new Uuid();
