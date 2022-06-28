# HttpandObservable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



#Http and Observable:


1- HttpClientModule in app.module.ts (automatically registers with angular injector)

2- Add as a dependency in service class in the constructor

3- Create url to a resource which we want to fetch

4- Since get method returns the Observable but need to cast into our type that is
   student so we to represent the type we first create the IStudent interface

   getStudents():Observable<IStudent[]>{
    // return this.http.get(this._url);
    return this.http.get<IStudent[]>(this._url);
  }

  so we converted the observable into student array of type IStudent

5- subscribe to the observable whichever components need it

6- observable is returned in response to http call

7- to handle exceptions on observable we use catch operator
