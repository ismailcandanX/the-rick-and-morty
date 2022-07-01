import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import "./CharacterDetails.css"
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
    console.log(character)
    return (
        <div className="app__characterDetails">
            <div className="go-back">
                <Link to="/search" className="app__episodeDetails-back"><h2>Go Back 👈</h2></Link>
            </div>

            <div className="app__characterDetails-wrapper">

                <div className="character__image">
                    <img src={character.image} />
                </div>
                <div className="character__description">
                    <h1 className="character__name"> 👉 Name: {character.name}</h1>
                    <h2 className="character__desc">👉Status: {character.status}</h2>
                    <h2 className="character__desc">👉Type: {character.type}</h2>
                    <h2 className="character__desc">👉Species: {character.species}</h2>
                    <h2 className="character__desc">👉Gender: {character.gender}</h2>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails