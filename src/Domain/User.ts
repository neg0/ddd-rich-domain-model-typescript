import Name from '../Shared/Name';
import Email from '../Shared/Email';

export default class User {
  public constructor(private _name: Name, private _email: Email) {}

  public get name(): string {
    return this._name.value;
  }

  public get email(): string {
    return this._email.value;
  }
}
