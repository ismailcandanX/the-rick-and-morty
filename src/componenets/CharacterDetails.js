import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function CharacterDetails() {
    const { id } = useParams()
    const [character, setCharacter] = React.useState([])


    const getCharacter = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json()
        setCharacter(data)
    }

    useEffect(() => {
        getCharacter()
    }, [])

    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <img src={character.image} />
        </div>
    )
}

export default CharacterDetails