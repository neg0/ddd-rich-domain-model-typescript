import ValueObject from './ValueObject';

export default class Email extends ValueObject {
  private static readonly regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  public constructor(private email: string) {
    super(email);

    if (false === Email.regex.test(email)) {
      throw new Error('Email is invalid');
    }
  }
}
