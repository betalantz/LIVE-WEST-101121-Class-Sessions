import React from 'react'
// import { useSelector } from 'react-redux'
import { useFetchPetsQuery } from '../app/services/petsApi'
import Pet from './Pet'

export default function PetContainer() {

    // const pets = useSelector(state => state.pets)
    const { data=[], isFetching } = useFetchPetsQuery()
    
    const petCards = data.map(pet => (
        <Pet key={pet.id} pet={pet} />
    ))

    return (
        <div className='ui cards'>
            {petCards}
        </div>
    )
}
