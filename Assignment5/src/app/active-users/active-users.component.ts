import { Component, EventEmitter, Input, Output } from "@angular/core";

import { UserServices } from "../users.services";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"]
})
export class ActiveUsersComponent {
  constructor(private userServices: UserServices) {}
  users = this.userServices.activeUsers;

  onSetToInactive(id: number) {
    this.userServices.inactiveUsers.push(this.userServices.activeUsers[id]);
    this.userServices.activeUsers.splice(id, 1);
  }
}
