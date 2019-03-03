export default abstract class ValueObject {
  protected constructor(protected _value: any) {}

  public get value(): any {
    return this._value;
  }
}
