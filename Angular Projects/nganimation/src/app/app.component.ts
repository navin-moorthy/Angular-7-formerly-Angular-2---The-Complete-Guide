import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  animations: [
    trigger("divState", [
      state(
        "normal",
        style({ backgroundColor: "red", transform: "translateX(0)" })
      ),
      state(
        "highlighted",
        style({ backgroundColor: "blue", transform: "translateX(100px)" })
      ),
      transition("normal => highlighted", [animate(300)]),
      transition("highlighted => normal", [animate(600)])
    ]),
    trigger("wildState", [
      state(
        "normal",
        style({ backgroundColor: "red", transform: "translateX(0) scale(1)" })
      ),
      state(
        "highlighted",
        style({
          backgroundColor: "blue",
          transform: "translateX(100px) scale(1)"
        })
      ),
      state(
        "shrunken",
        style({
          backgroundColor: "green",
          transform: "translateX(0) scale(0.5)"
        })
      ),
      transition("normal => highlighted", [animate(300)]),
      transition("highlighted => normal", [animate(800)]),
      transition("shrunken <=> *", [
        style({ backgroundColor: "orange" }),
        animate(1000, style({ borderRadius: "50px" })),
        animate(500)
      ])
    ]),
    trigger("list1", [
      state("in", style({ opacity: 1, transform: "translateX(0)" })),
      transition("void => *", [
        style({ opacity: 0, transform: "translateX(-100px)" }),
        animate(300)
      ]),
      transition("* => void", [
        animate(300, style({ opacity: 0, transform: "translateX(100px)" }))
      ])
    ]),
    trigger("list2", [
      state("in", style({ opacity: 1, transform: "translateX(0)" })),
      transition("void => *", [
        animate(
          1000,
          keyframes([
            style({ opacity: 0, transform: "translateX(-100px)", offset: 0 }),
            style({
              opacity: 0.5,
              transform: "translateX(-50px)",
              offset: 0.5
            }),
            style({ opacity: 1, transform: "translateX(-20px)", offset: 0.8 }),
            style({ opacity: 1, transform: "translateX(0)", offset: 1 })
          ])
        )
      ]),
      transition("* => void", [
        group([
          animate(300, style({ color: "red", "font-weight": "bolder" })),
          animate(800, style({ opacity: 0, transform: "translateX(100px)" }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  state = "normal";
  wildState = "normal";
  list: any = ["Milk", "Sugar", "Bread"];

  onAnimate() {
    this.state === "normal"
      ? (this.state = "highlighted")
      : (this.state = "normal");
    this.wildState === "normal"
      ? (this.wildState = "highlighted")
      : (this.wildState = "normal");
  }

  onShrink() {
    this.wildState = "shrunken";
  }

  onAnimationStarted(e) {
    console.log(e);
  }
  onAnimationEnded(e) {
    console.log(e);
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
