[![Build Status](https://travis-ci.org/neg0/ddd-rich-domain-model-typescript.svg?branch=master)](https://travis-ci.org/neg0/ddd-rich-domain-model-typescript)

# Rich Domain Model in TypeScript
Example of Domain-Drive Development using Rich Domain Models in TDD

## Scenario
Created a User model with ValueObject(s) that hold the logic and validation of each property inside the object.

**Testing Libraries:** Mocha, Chai, and Mockito

### Run Tests using Docker
```bash
$ docker-compose -f docker/docker-compose.yml up -d
$ docker-compose -f docker/docker-compose.yml exec node yarn install
$ docker-compose -f docker/docker-compose.yml exec node yarn test
```