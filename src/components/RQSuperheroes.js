import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperheroes = () => {
    
    const { isLoading, data } = useQuery('super-heroes', fetchSuperHeroes)

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    console.log(data)
    return (
        <>
            <h2>
                RQSuperheroes
            </h2>
            {
                data?.data.map(hero => {
                   return <div key={hero.name}>
                        {hero.name}
                    </div>
                })
            }
        </>
    )
}

export default RQSuperheroes