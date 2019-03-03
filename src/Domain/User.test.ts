import { expect } from 'chai';
import { mock, instance, when, verify } from 'ts-mockito';

import User from './User';
import Name from '../Shared/Name';
import Email from '../Shared/Email';

const MOCK_NAME = 'Hadi';
const MOCK_EMAIL = 'hadi@mailservice.dev';
const MOCK_INVALID_NAMES = [
  'H4di',
  'H@di',
  'H£do!n',
  'Ben^',
];

describe('testing `User` that', () => {
  let sut: User,
    mockedName: Name,
    mockedNameInstance: Name,
    mockedEmail: Email,
    mockedEmailInstance: Email;

  beforeEach(() => {
    mockedName = mock(Name);
    mockedNameInstance = instance(mockedName);
    when(mockedName.value).thenReturn(MOCK_NAME);

    mockedEmail = mock(Email);
    when(mockedEmail.value).thenReturn(MOCK_EMAIL);
    mockedEmailInstance = instance(mockedEmail);

    sut = new User(mockedNameInstance, mockedEmailInstance);
  });

  it('should be instantiable', () => {
    expect(sut).to.be.instanceOf(User);
  });

  it('should have `name` property of `User`', () => {
    expect(sut.name).to.equal(MOCK_NAME);
  });

  it('should have `email` property of `User`', () => {
    expect(sut.email).to.equal(MOCK_EMAIL);
  });

  describe('when `name` getter called', () => {
    beforeEach(() => {
      sut.name;
    });

    it('should call `Name` Value Object method `value` once', () => {
      verify(mockedName.value).once();
    });
  });

  describe('when `email` getter called', () => {
    beforeEach(() => {
      sut.email;
    });

    it('should call `Email` Value Object method `value` once', () => {
      verify(mockedEmail.value).once();
    });
  });

  for (let i in MOCK_INVALID_NAMES) {
    it(`should throw an error when trying to instantiate with invalid name: ${MOCK_INVALID_NAMES[i]}`, () => {
      try {
        new Name(MOCK_INVALID_NAMES[i]);
      } catch (e) {
        expect(e).to.be.instanceOf(Error);
      }
    });
  }
});
