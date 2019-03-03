import ValueObject from './ValueObject';

export default class Name extends ValueObject {
  private static readonly regex = /^[a-zA-Z ]+$/;

  public constructor(public name: string) {
    super(name);

    if (name.length < 1 || name.length > 64) {
      throw new Error('Name should be between 1 to 64 character long.');
    }

    if (false === Name.regex.test(name)) {
      throw new Error("Name is invalid");
    }
  }
}
