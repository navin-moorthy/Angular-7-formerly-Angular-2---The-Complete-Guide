import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "recipe";

  ngOnInit() {
    firebase.initializeApp({
      apiKey: environment.apiKey,
      authDomain: "angularrecipebook-12f90.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
