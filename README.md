# Angular-7-formerly-Angular-2---The-Complete-Guide

Angular 7 (formerly Angular 2) - The Complete Guide Course from Maximilian Schwarzmüller in Udemy - Notes

## Section 1

### Getting Started

- Update Angular CLI and create a new app.
- `ng new ?` for generating basic angular app.
- `ng serve` to serve the app in angular default 127.0.0.1 host and 4200 port.
- Change the port and host as required in angular.json file `serve` object.
- Added Bootstrap using NPM and imported to style.css by pointing it to nodemodules bootstrap.min.css.

## Section 2

### The Basics

- Learned about the Modules, Components and Decorators.
- Learned about Components features - `template` and `styles` instead of "templateUrl and styleUrls"
- Learned about creating a component using `ng generate component <component name>`.
- String Interpolation = {{ }} to pass the value from typerscript to html.
- Property Binding - `(event) = "typescript variables or function to perform"`
- Learned directives `*ngIf="value; else anyvariable`, `ngStyle` and `ngClass`.
- Learned Directives

```html
<button class="btn btn-primary" (click)="onTogglebutton()">
  Display Details
</button>
<p *ngIf="displaySecret">Secret Password</p>
<div
  *ngFor="let logItem of log; let i = index"
  [ngStyle]="{ backgroundColor: i >= 5 ? 'red' : 'transparent' }"
  [ngClass]="{ 'white-text': i >= 5 }"
>
  {{ logItem }}
</div>
```

```js
export class AppComponent {
  displaySecret = false;
  log = [];
  onTogglebutton() {
    this.displaySecret = !this.displaySecret;
    this.log.push(new Date());
  }
}
```

```css
.white-text {
  color: white;
}
```

## Section 3

### Course Project - The Basics

- `$ ng g c /recipes --spec false` - generate the component without spec test file
- Generated Project Files.
- Added the Navbar as header.
- Created a Recipe Model.
- Added the contents for Recipe list in HTML.
- Used ngFor to list all the recipe from the recipe list.
- Displayed the recipe list.
- Displayed the recipe details.
- Worked on shopping list component.
- Created a Ingredient Model.
- Created and outputted the shopping list.
- Added shopping list edit section

## Section 4

### Debugging

- Installed https://augury.rangle.io/ Augury for Debugging in Angular which makes it easier.

## Section 5

### Components and Data binding Deep Dive

- Learned about components variables property variable using @Input(alias) and @Output(alias).
- Learned about local references. #xxxxxxx to the HTMLElement.
- Learned about @ViewChild("component") as two way binding using the HTMLElement local reference.
- Learned about Component Lifecycle.

## Section 6

### Course Project : Components and Data Binding

- Added navingation to recipe and shopping list using Output, ngIf and EventEmitters.
- Passing Recipe Data from Recipe list to recipe detail using Property Binding.
- Using both the above method to bind them to recipe component.
- Added the ingredients using the form with the about binding methods.

## Section 7

### Directives Deep Dive

- Structural Directives *ngIf and *ngFor Recap
- Attribute Directives ngStyle and ngClass Recap
- Learned about creating a new directive using basic @directive and rendered.
- Learned about @HostListener for Host Events and @HostBinding for bind Host Properties.

## Section 8

### Course Project

- Built own Dropdown Directive.

## Section 9

### Using the services and Dependency Injection

- Assignment5 to test the knowledge learned in this section.

## Section 10

### Course Project : Services and Dependency Injection

- Reduced the project code recipe component using the Services.
- Reduced the project code shopping list using the Services.

## Section 11

### Routers Deep Dive

- Learned about the router Module

## Section 12

### Course Project : Routing

- Removed the component Selector Routing with Angular Routing

## Section 13

### Understanding Observable

- Learned About Rxjs Observable.

## Section 14

### Course Project: Implementing Observable

- Removed the event emitters and added observables to the project.

## Section 15

### Handling Forms in Angular Apps

- Learned about Template Driven and Reactive Form Approach.

## Section 16

### Course Project: Implementing TD Forms

- Added the form to shopping list component and edit the same form.
- Added the form to recipe list component and edit the same form.
- Added functionalities to all the buttos in the edit pages.

## Section 17

### Using Pipes to transform the Output

- Learned to add and create pipes using string Interpolation to manipulate the output.

## Section 18

### Making HTTP Requests

- Learned about HTTP Requests and Async Map

## Section 19

### Course Project : Implementing HTTP

- Implemented Fetch and Save Data from FireBase Real Database.

## Section 20

### Authentication and Route Protection in Angular

- Added Login and SignUp feature using Firebase Authentication.
- Implemented AuthGuard to only Authenticated Users.

## Section 21

### App optimization

- Implemented the features Module.
-
