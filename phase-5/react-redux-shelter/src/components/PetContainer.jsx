import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { css } from '@emotion/react';
import { useFetchPetsQuery } from '../app/services/petsApi'
import Pet from './Pet'
import Filter from './Filter';
import RotateLoader from 'react-spinners/RotateLoader';

export default function PetContainer() {

    // const pets = useSelector(state => state.pets)
    const [type, setType] = useState("");
        
    const { data=[], isFetching } = useFetchPetsQuery(type)
    
    const petCards = data.map(pet => (
        <Pet key={pet.id} pet={pet} />
    ))

    const override = css`
        display: flex;
        margin: 0 auto;
        z-index: 1
    `

    return (
        <div className='ui cards'>
            <RotateLoader loading={isFetching} size={20} color={"#F5A623"}/>
            <Filter onChangeType={setType} />
            {petCards}
        </div>
    )
}
