import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [SharedModule, CommonModule, FormsModule]
})
export class ShoppingListModule {}
