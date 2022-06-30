import React from 'react'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function SelectEpisode(props) {
    return (
        <>
            <h1>Select Episode</h1>
            <ul>
                {props.episodes?.map(episode => (
                    <li key={uniqid()}>
                        <Link to={`/search/${episode.id}`}>{episode.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        episodes: state.episodes
    }
}
export default connect(mapStateToProps)(SelectEpisode)