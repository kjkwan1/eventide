import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BaseDatabaseService } from "src/app/database/services/base-database/base-database.service";
import { initDb, initDbSuccess } from "../actions/db-actions";
import { switchMap, map } from "rxjs";

@Injectable()
export class DBEffects {
    initDb$ = createEffect(() =>
        this.actions$.pipe(
            ofType(initDb),
            switchMap(() => this.baseDatabaseService.initDb()),
            map(() => initDbSuccess())
        )
    )

    constructor(
        private actions$: Actions,
        private baseDatabaseService: BaseDatabaseService,
      ) {}
}