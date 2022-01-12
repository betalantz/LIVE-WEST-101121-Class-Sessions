import {createStore} from 'redux'

// single source of truth
const initialState = {
    budget: 500, 
    pets: [
        {id: 1, name: "Daisy", species: 'iguana'},
        {id: 2, name: "Misty", species: 'dog'}
    ]
}

// pure reducer function
function reducer(state = initialState, action){
    switch (action.type){
        case 'addTenDollars':
            return {
                ...state,
                budget: state.budget + 10
            }
        case 'addMoney':
            return {
                ...state,
                budget: state.budget + action.payload
            }
        case 'addPet':
            return {
                ...state,
                pets: [...state.pets, action.payload]
            }
        case 'adoptPet':
            return {
                ...state,
                pets: state.pets.filter(p => p.id != action.payload)
            }
        default:
            return state
    }
}

const store = createStore(reducer)

// subscribe to updates: subscribe()
// store.subscribe(function() {
//     // read the state: getState()
//     console.log("state updated")
//     const state = store.getState()
//     const budgetH3 = document.querySelector('#budget')
//     console.log(budgetH3)
//     budgetH3.textContent = `Budget: ${state.budget}`
// })

// const btn = document.querySelector("#add10")
// console.log('btn: ', btn);

// btn.addEventListener('click', () => {
//     console.log("clicked")
//     store.dispatch({type: 'addTenDollars'})
// })


// update the state: dispatch()
// action: {type: 'mandatory', payload: '}
store.dispatch({type: 'addTenDollars'})

console.log('store: ', store);
const state = store.getState()
console.log('state: ', state);
store.dispatch({type: 'addMoney', payload: 20})
console.log(store.getState())
const newPet = {id: 3, name: 'Squishy', species: "cat"}
store.dispatch({type: 'addPet', payload: newPet})
console.log(store.getState())
store.dispatch({type: 'adoptPet', payload: 2})
console.log(store.getState())

// console.log('state: ', state);
// const newState = reducer(state, {type: 'addTenDollars'})
// console.log('newState: ', newState);


