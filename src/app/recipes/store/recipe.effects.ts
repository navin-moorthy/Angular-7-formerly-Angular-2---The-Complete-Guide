import { Effect, Actions, ofType } from "@ngrx/effects";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { switchMap, withLatestFrom, map } from "rxjs/operators";

import * as RecipeActions from "./recipe.actions";
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromRecipe from "./recipe.reducer";

@Injectable()
export class RecipeEffects {
  @Effect()
  recipeFetch = this.action$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>(
        "https://angularrecipebook-12f90.firebaseio.com/recipes.json",
        {
          observe: "body",
          responseType: "json"
        }
      );
    }),
    map(recipes => {
      console.log(recipes);
      for (let recipe of recipes) {
        if (!recipe["ingredients"]) {
          recipe["ingredients"] = [];
        }
      }
      return {
        type: RecipeActions.SET_RECIPES,
        payload: recipes
      };
    })
  );

  @Effect({ dispatch: false })
  recipeStore = this.action$.pipe(
    ofType(RecipeActions.STORE_RECIPES),
    withLatestFrom(this.store.select("recipes")),
    switchMap(([action, state]) => {
      const req = new HttpRequest(
        "PUT",
        "https://angularrecipebook-12f90.firebaseio.com/recipes.json",
        state.recipes,
        { reportProgress: true }
      );
      return this.httpClient.request(req);
    })
  );

  constructor(
    private action$: Actions,
    private httpClient: HttpClient,
    private store: Store<fromRecipe.FeatureState>
  ) {}
}
