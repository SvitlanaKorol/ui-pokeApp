import { configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { rootReducer, RootState } from './reducers/rootReducer';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk],
});
