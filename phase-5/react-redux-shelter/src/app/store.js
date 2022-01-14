import { configureStore } from '@reduxjs/toolkit'
import budgetReducer from '../features/budget/budgetSlice'

// configureStore is a wrapper
// around createStore BUT is sets up 
// the store with defaults, such as
// enabling redux-dev-tools
// adding Thunk middleware

export const store = configureStore({
    // will automatically call combineReducers
    // provide state.budget to the store
    reducer: {
        budget: budgetReducer
    }
})