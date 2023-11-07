import { enableMapSet } from 'immer'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { tests } from './tests';

enableMapSet()

export const store = configureStore({
	reducer: {
		tests
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false })
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
