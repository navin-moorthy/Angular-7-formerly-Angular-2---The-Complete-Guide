import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as AuthActions from "./auth.actions";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { fromPromise } from "rxjs/observable/fromPromise";
import * as firebase from "firebase";

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action: AuthActions.TrySignup) => {
      return action.payload;
    })
    .switchMap((authData: { username: string; password: string }) => {
      return fromPromise(
        firebase
          .auth()
          .createUserWithEmailAndPassword(authData.username, authData.password)
      );
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      return [
        { type: AuthActions.SIGNUP },
        { type: AuthActions.SET_TOKEN, payload: token }
      ];
    });

  constructor(private actions$: Actions) {}
}
