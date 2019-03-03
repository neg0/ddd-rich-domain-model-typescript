import Name from '../Shared/Name';
import Email from '../Shared/Email';

export default class User {
  public constructor(private _name: Name, private _email: Email) {}

  public static create(name: string, email: string): User {
    return new User(new Name(name), new Email(email));
  }

  public get name(): string {
    return this._name.value;
  }

  public get email(): string {
    return this._email.value;
  }
}
