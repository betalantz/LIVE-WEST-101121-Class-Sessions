import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 100,
    credit: 200
}

const budgetSlice = createSlice({
    name: 'budget',
    initialState,
    reducers: {
        addTen(state){
            state.value += 10
        },
        // immer library takes state mutations and does the state copying 
        // we do to preserve state

        // for the subtract reducer, we want a payload, 
        // so we need both state and action args
        // values passed to the actionCreator fn will become the payload
        subtractAmount(state, action){
            state.value -= action.payload
        }
    }
})

export const { addTen, subtractAmount } = budgetSlice.actions
export default budgetSlice.reducer