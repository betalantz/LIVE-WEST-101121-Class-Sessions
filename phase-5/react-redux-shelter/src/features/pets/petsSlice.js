// DUCKS pattern
import { createSlice } from '@reduxjs/toolkit'  
import { pets } from '../../data/pets'     

const petsSlice = createSlice({
    name: "name",
    initialState: pets,
    reducers: {
        adoptPet(state, action){
            return state
        }
    }
})

export default petsSlice.reducer