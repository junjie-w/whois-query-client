# WhoisQueryClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## Run the Application

*important* Please run the Node.js server for this application first (run `node server.js` to start the server), and remember to type your MongoDB database username and password in the .env file.

And, back to the front-end: run `ng serve` for a dev server. Then navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

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

## Updates

1. app.components.ts: added string type to the title
export class AppComponent {
  title: string = 'whois-query-client';
}

2. added display-data.component 

3. changed data (received domain data) type to be an array
display-data.component.ts
  export class DisplayDataComponent implements OnInit {
  @Input() data: [];
  constructor() { }
  ngOnInit(): void {
  }
}
query.component.ts
  data: [];

<!-- 4. updated styling on mobile devices -->