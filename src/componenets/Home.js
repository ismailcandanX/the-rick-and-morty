import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getEpisodes } from '../actions'
import "./Home.css"
function Home(props) {

    useEffect(() => {
        props.getEpisodes()
    }, [])
    return (
        <div className="app__home">
            <img src="./images/rick_morty.png" alt="rick and morty" className="app__home-photo" />
            <h1 className="app__home-welcome">Welcome to Rick and Morty Wiki</h1>
            <p className="app__home-description">This is a simple app that allows you to search for characters and episodes from the Rick and Morty series.</p>
            <Link to="/search" style={{ textDecoration: 'none' }}><p className="app__home-link">👉 Let's Start 👈</p></Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes
    }
}


export default connect(mapStateToProps, { getEpisodes })(Home)