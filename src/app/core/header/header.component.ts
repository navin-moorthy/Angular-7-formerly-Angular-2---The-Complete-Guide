import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as firebase from "firebase";

import * as fromApp from "../../store/app.reducer";
import * as fromAuth from "../../auth/store/auth.reducers";
import * as AuthActions from "../../auth/store/auth.actions";
import * as RecipeActions from "../../recipes/store/recipe.actions";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select("auth");
  }
  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.Logout());
  }
}
