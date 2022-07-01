import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCharacters } from '../actions'
import axios from "axios"
import uniqeid from 'uniqid'
import Select from 'react-select'
import "./EpisodeDetails.css"

function EpisodeDetails(props) {
    const { id } = useParams()
    const [show, setShow] = useState(false)
    const [char, setChar] = useState([])
    const navigate = useNavigate()
    const { characters } = props
    useEffect(() => {
        props.getCharacters(id)
    }, [])
    const [val, setVal] = useState([]);
    const getData = async () => {
        characters.map(async (item) => {
            await axios.get(item)
                .then(res => {
                    setVal(prev => [...prev, res.data])
                }
                )
        })
    }
    useEffect(() => {
        getData()
    }
        , [])

    const options = [
        { value: 'Alive', label: 'Alive' },
        { value: 'Dead', label: 'Dead' },
        { value: 'unknown', label: 'unknown' }
    ]
    const [selectedOption, setSelectedOption] = useState("Alive");
    return (
        <div className="app__episodeDetails">
            <h1 className="app__episodeDetails-title">Episode Details</h1>
            <Link to="/search" className="app__episodeDetails-back">Go Back 👈</Link>

            <div className="app__episodeDetails-body">
                <div className="app__episodeDetails-body-filter">
                    <h4 className="app__episodeDetails-body-title">You can select status 👉</h4>
                    <Select
                        options={options}
                        onChange={(e) => setSelectedOption(e.value)}
                    />
                </div>

                {/* {val &&
                    val.map(item => <div key={uniqeid()}>
                        <Link to={`/characters/${item.id}`}>{item.name}
                            <div><img src={item.image} alt={item.name} /></div>
                            <h4>{item.status}</h4>
                        </Link>
                    </div>)
                } */}
                <div className="app__episodeDetails-cards">
                    {
                        selectedOption === "Alive" && val && val.map(item => item.status === "Alive" && <div className="app__episodeDetails-singleCard" key={uniqeid()}>
                            <Link to={`/characters/${item.id}`}>{item.name}
                                <div><img src={item.image} alt={item.name} /></div>
                            </Link>
                        </div>)
                    }
                    {
                        selectedOption === "Dead" && val && val.map(item => item.status === "Dead" && <div className="app__episodeDetails-singleCard" key={uniqeid()}>
                            <Link to={`/characters/${item.id}`}>{item.name}
                                <div><img src={item.image} alt={item.name} /></div>
                            </Link>
                        </div>)
                    }
                    {
                        selectedOption === "unknown" && val && val.map(item => item.status === "unknown" && <div className="app__episodeDetails-singleCard" key={uniqeid()}>
                            <Link to={`/characters/${item.id}`}>{item.name}
                                <div><img src={item.image} alt={item.name} /></div>
                            </Link>
                        </div>)
                    }
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        episodes: state.episodes,
        characters: state.characters,
    }
}
export default connect(mapStateToProps, { getCharacters })(EpisodeDetails)