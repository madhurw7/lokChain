# LokChain

A simple polling app, which (would) include a very simple blockchain-type system, where all the votes would be stored in blocks, which would be linked through hashes of each block. The hashes are calculated using SHA256 algortihm. This will be a very basic and very boiled down version of blockchain. Decentralisation would not be included.

Progress: Basic PollsApp is done, included a Proof-of-work type hashing method with very low difficulty (Hash should start with three zeros). Integrated Firebase, to count the number of votes.

WIP: Working on implementing the very basic blockchain. 

 Add authentication and add the feature of one user can only vote once.
Add admin feature and only he can access the vote count (Done)

ToDo: Create an admin panel where admin can handle the polls.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
