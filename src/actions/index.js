import axios from 'axios';

export const getEpisodes = () => dispatch => {
    axios.get('https://rickandmortyapi.com/api/episode')
        .then(res => dispatch({
            type: 'GET_EPISODES',
            payload: res.data.results
        }))
}

export const getCharacters = (id) => dispatch => {
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(res => dispatch({
            type: 'GET_CHARACTERS',
            payload: res.data.characters
        }))
}


