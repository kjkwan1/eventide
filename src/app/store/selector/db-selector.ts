import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";

export const selectDbState = (state: AppState) => state.db;

export const isDatabaseInitialized = createSelector(
    selectDbState,
    (dbState) => dbState.isDatabaseInitialized
)