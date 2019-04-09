import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  @Input() oddNumber: number[] = [];
  @Input() evenNumber: number[] = [];
  constructor() {}

  ngOnInit() {}
}
