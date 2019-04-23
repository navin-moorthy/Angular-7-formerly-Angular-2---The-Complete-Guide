import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";
import { AuthInterceptor } from "../shared/auth.interceptor";

@NgModule({
  declarations: [HeaderComponent, HomeComponent],
  imports: [AppRoutingModule, CommonModule, SharedModule],
  exports: [AppRoutingModule, HeaderComponent],
  providers: [
    ShoppingListService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule {}
