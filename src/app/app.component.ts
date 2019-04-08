import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  displaySecret = false;
  log = [];
  onTogglebutton() {
    this.displaySecret = !this.displaySecret;
    this.log.push(new Date());
  }
}
