# Peach Tree Bank (POC)

[![codecov](https://codecov.io/gh/webcat12345/peach-tree/branch/dev/graph/badge.svg?token=8EWUBQ5UL2)](https://codecov.io/gh/webcat12345/peach-tree)

This project is test task for Backbase Front End Technical Assignment.

## Documentations
* Requirement - [REQUIREMENTS.md](REQUIREMENTS.md)
* Project Consultation - [CONSULTATION.md](CONSULTATION.md)

## Technical guideline

### Hosted domains
This project is deployed to Github Page, and you can review the URL - [https://webcat12345.github.io/peach-tree/](https://webcat12345.github.io/peach-tree/)

### Culture & Development process
* For the Git guideline, I followed [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
* There is a CI/CD integration with [Github Actions](https://github.com/features/actions)
* Pushing to Git branch `dev` will do proper testing for the codebase
* Pushing to Git branch `prod` will deploy project to the server

### Framework & Libraries

* [Angular v11](https://angular.io)
* [Bootstrap 4](https://getbootstrap.com/)
* [NG Bootstrap](https://ng-bootstrap.github.io/#/home)

### Outline of code
* _Core_ - main features and functional things such as services, models etc.
* _Layout_ - main layout features, only navbar for this project
* _UI-Kit_ - reusable components we are going to use on this application
* _Transaction Manager_ -  all main features for the transaction manager functionality including components and pipes

### Development
```bash
$ npm install

# run development server, will be run on http://localhost:4200 as default
$ npm run start

# do lint testing
$ npm run lint

# unit test
$ npm run test

# e2e test
$ npm run e2e
```
