import { createReducer, on } from "@ngrx/store";
import { initialState } from "../state/app.state";
import { initDb, initDbFailure, initDbSuccess } from "../actions/db-actions";

export const dbReducer = createReducer(
    initialState,
    on(initDb, state => ({
        ...state,
        isDatabaseInitialized: false,
    })),
    on(initDbSuccess, state => {
        console.log('initDbSuccess action received');
        return {
            ...state,
            isDatabaseInitialized: true
        };
    }),
    on(initDbFailure, state => ({
        ...state,
        isDatabaseInitialized: false
    })),
)