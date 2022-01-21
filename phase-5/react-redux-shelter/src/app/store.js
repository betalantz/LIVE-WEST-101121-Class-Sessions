import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from '../features/budget/budgetSlice'
import { petsApi } from '../app/services/petsApi'
import { dogsApi } from '../app/services/dogsApiSlice';
;

// import petsReducer from '../features/pets/petsSlice'

// configureStore is a wrapper
// around createStore BUT it sets up 
// the store with defaults, such as
// enabling redux-dev-tools
// adding Thunk middleware

export const store = configureStore({
    // will automatically call combineReducers
    // provide state.budget, state.pets to the store
    reducer: {
        budget: budgetReducer,
        [petsApi.reducerPath]: petsApi.reducer,
        [dogsApi.reducerPath]: dogsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(petsApi.middleware)
    }
})