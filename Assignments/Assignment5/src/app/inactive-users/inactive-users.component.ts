import { Component, EventEmitter, Input, Output } from "@angular/core";

import { UserServices } from "../users.services";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"]
})
export class InactiveUsersComponent {
  constructor(private userServices: UserServices) {}

  users = this.userServices.inactiveUsers;

  onSetToActive(id: number) {
    this.userServices.activeUsers.push(this.userServices.inactiveUsers[id]);
    this.userServices.inactiveUsers.splice(id, 1);
  }
}
