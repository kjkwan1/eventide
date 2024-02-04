import { createAction } from "@ngrx/store";

export const initDb = createAction('[DB] DB init');
export const initDbSuccess = createAction('[DB] DB init success');
export const initDbFailure = createAction('[DB] DB init failure');