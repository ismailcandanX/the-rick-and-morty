import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEpisodes } from '../actions'

function Home(props) {

    useEffect(() => {
        props.getEpisodes()
    }, [])
    return (
        <div>
            <h1>Welcome to Rick and Morty Wiki</h1>
            <p>This is a simple app that allows you to search for characters and episodes from the Rick and Morty series.</p>
            <Link to="/search">Search</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes
    }
}


export default connect(mapStateToProps, { getEpisodes })(Home)