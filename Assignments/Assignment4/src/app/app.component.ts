import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  odd: number[] = [];
  even: number[] = [];
  onIntervalEmitter(intervalFired: number) {
    if (intervalFired % 2 === 0) {
      this.even.push(intervalFired);
    } else {
      this.odd.push(intervalFired);
    }
  }
}
