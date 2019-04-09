import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() intervalEmitter = new EventEmitter<number>();
  intervalTime;
  counter = 1;
  constructor() {}

  ngOnInit() {}

  onStartGame() {
    this.intervalTime = setInterval(() => {
      this.intervalEmitter.emit(this.counter);
      this.counter++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.intervalTime);
  }
}
