import { expect } from 'chai';

import Email from './Email';
const MOCK_VALID_EMAIL: string = 'hadi@mailservice.dev';
const MOCK_INVALID_EMAILS: string[] = [
  'hadi@mailservice',
  'hadimailservice.dev',
  '@.com',
  '.com@mailservice',
];

describe('testing `Email` Value Object', () => {
  let sut: Email;

  beforeEach(() => {
    sut = new Email(MOCK_VALID_EMAIL);
  });

  it('should be instantiable', () => {
    expect(sut).to.be.instanceOf(Email);
  });

  it('should return email address when `value` getter is called', () => {
    expect(sut.value).to.equal(MOCK_VALID_EMAIL);
  });

  for (let i in MOCK_INVALID_EMAILS) {
    it(`should throw an error when trying to instantiate with invalid email address: ${MOCK_INVALID_EMAILS[i]}`, () => {
      try {
        new Email(MOCK_INVALID_EMAILS[i]);
      } catch (e) {
        expect(e).to.be.instanceOf(Error);
      }
    });
  }
});
