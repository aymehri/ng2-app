# Ng2App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.
```sh
ng new ng2-app --prefix=app --style=scss --routing --skip-install
npm install bootstrap@next --save
npm install jquery --save
npm install tether --save
npm install font-awesome --save
npm install lodash --save
npm install @types/lodash --save-dev
npm install @ngrx/core @ngrx/store @ngrx/effects --save
npm install @ngrx/db @ngrx/router-store @ngrx/store-devtools --save
npm install ngrx-store-freeze --dev-save

//to make test pass in jenkins
npm install --save-dev phantomjs phantomjs-prebuilt karma-phantomjs-launcher
npm install --save-dev intl
//see https://stackoverflow.com/questions/42513591/syntaxerror-unexpected-token-const-for-testing-es5-js
// and https://github.com/angular/angular-cli/issues/5763
// and https://github.com/angular/angular-cli/issues/2013

//to generate new module
ng g m admin --routing
ng g c admin
ng g c admin/email-blast
ng g c admin/users
ng g s admin/users-data -ve Emulated -cd OnPush
ng g guard admin
ng g c login -m login/login.module

//directive
ng g d search-box -d

//pipe
ng g p shard/init-caps


ng set defaults.styleExt scss -g
ng lint --fix
//build
npm i source-map-explorer --save-dev
./nodes_modules/.bin/source-map/explorer dist/main.bundle.js
./nodes_modules/.bin/source-map/explorer dist/vendor.bundle.js


//test
ng test -cc -sr
```

```sh
// I will try to provide example with following operator and observable
map
filter 
scan
mergeMap
switchMap
combileLatest
concat
do

takeUntil
take
first
takeWhile
switchMapswitchMap

timer fired twice, we fix that with adding share
```

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
