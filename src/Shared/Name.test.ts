import { expect } from 'chai';

import Name from './Name';
const MOCK_VALID_NAME: string = 'Hadi T';
const MOCK_INVALID_NAMES: string[] = [
  'a',
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  '',
];

describe('testing `Name` Value Object', () => {
  let sut: Name;

  beforeEach(() => {
    sut = new Name(MOCK_VALID_NAME);
  });

  it('should be instantiable', () => {
    expect(sut).to.be.instanceOf(Name);
  });

  it('should return email address when `value` getter is called', () => {
    expect(sut.value).to.equal(MOCK_VALID_NAME);
  });

  for (let i in MOCK_INVALID_NAMES) {
    it(`should throw an error when trying to instantiate with invalid email address: ${MOCK_INVALID_NAMES[i]}`, () => {
      try {
        new Name(MOCK_INVALID_NAMES[i]);
      } catch (e) {
        expect(e).to.be.instanceOf(Error);
      }
    });
  }
});
