import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EventComponent } from './event/event.component';
import { GameControlComponent } from './game-control/game-control.component';

@NgModule({
  declarations: [AppComponent, EventComponent, GameControlComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
