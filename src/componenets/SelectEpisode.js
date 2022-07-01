import React from 'react'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import "./SelectEpisode.css"
function SelectEpisode(props) {
    return (
        <div className="app__selectEpisode">
            <h1 className="app__selectEpisode-title">Select Episode</h1>
            <ul>
                {props.episodes?.map(episode => (
                    <li key={uniqid()} className="app__selectedEpisode-list">
                        <Link to={`/search/${episode.id}`}>
                            <h2 className="app__selectedEpisode-list-title">{episode.name}</h2>
                            <p className="app__selectedEpisode-list-description">{episode.episode}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        episodes: state.episodes
    }
}
export default connect(mapStateToProps)(SelectEpisode)