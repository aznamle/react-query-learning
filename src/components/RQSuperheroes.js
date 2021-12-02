import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const RQSuperheroes = () => {
    
    const { isLoading, data, isError, error, isFetching } = useQuery('super-heroes', fetchSuperHeroes, { cacheTime: 5000, })

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

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
