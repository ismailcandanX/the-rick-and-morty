import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCharacters } from '../actions'
import axios from "axios"
import uniqeid from 'uniqid'
import Select from 'react-select'


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
        <div>
            <h1>Episode Details</h1>
            <Link to="/search">Go Back 👈</Link>

            <div>
                <h4>You can select status 👉</h4>
                <Select
                    options={options}
                    onChange={(e) => setSelectedOption(e.value)}
                />
                {/* {val &&
                    val.map(item => <div key={uniqeid()}>
                        <Link to={`/characters/${item.id}`}>{item.name}
                            <div><img src={item.image} alt={item.name} /></div>
                            <h4>{item.status}</h4>
                        </Link>
                    </div>)
                } */}
                {
                    selectedOption === "Alive" && val && val.map(item => item.status === "Alive" && <div key={uniqeid()}>
                        <Link to={`/characters/${item.id}`}>{item.name}
                            <div><img src={item.image} alt={item.name} /></div>
                            <h4>{item.status}</h4>
                        </Link>
                    </div>)
                }
                {
                    selectedOption === "Dead" && val && val.map(item => item.status === "Dead" && <div key={uniqeid()}>
                        <Link to={`/characters/${item.id}`}>{item.name}
                            <div><img src={item.image} alt={item.name} /></div>
                            <h4>{item.status}</h4>
                        </Link>
                    </div>)
                }
                {
                    selectedOption === "unknown" && val && val.map(item => item.status === "unknown" && <div key={uniqeid()}>
                        <Link to={`/characters/${item.id}`}>{item.name}
                            <div><img src={item.image} alt={item.name} /></div>
                            <h4>{item.status}</h4>
                        </Link>
                    </div>)
                }

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