import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Superheroes = () => {
    
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/superheroes')
        .then((res) => {
            setData(res.data)
            setLoading(false)
        })
    }, [])

    if(isLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            {data.map((hero) => {
                return <div key={hero.name}>{hero.name}</div>
            })}
        </div>
    )
}

export default Superheroes
