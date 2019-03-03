[![Build Status](https://travis-ci.org/neg0/ddd-rich-domain-model-typescript.svg?branch=master)](https://travis-ci.org/neg0/ddd-rich-domain-model-typescript)    [![codecov](https://codecov.io/gh/neg0/ddd-rich-domain-model-typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/neg0/ddd-rich-domain-model-typescript)
# Rich Domain Model in TypeScript
Example of Domain/Test-Driven Development using Rich Domain Models _(DDD & TDD)_

## Scenario
Created a User model with ValueObject(s) that hold the logic and validation of each property inside the object.

**Language Specifications:**
* ECMAScript 2018
* TypeScript 3.3

**Testing Libraries:**

* _Test Runner:_ Mocha
* _Test Assertions:_ Chai
* _Test Mock:_ Mockito

### Run Tests using Docker
```bash
$ docker-compose -f docker/docker-compose.yml up -d
$ docker-compose -f docker/docker-compose.yml exec node yarn install
$ docker-compose -f docker/docker-compose.yml exec node yarn test
```