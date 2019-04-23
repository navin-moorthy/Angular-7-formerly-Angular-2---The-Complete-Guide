import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/Rx";

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService
  ) {}

  storeRecipes() {
    return this.httpClient.put(
      "https://angularrecipebook-12f90.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    this.httpClient
      .get<Recipe[]>(
        "https://angularrecipebook-12f90.firebaseio.com/recipes.json"
      )
      .map(recipes => {
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            recipe["ingredients"] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
