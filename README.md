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
-
