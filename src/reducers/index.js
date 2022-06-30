const INITIAL_STATE = {
    episodes: [],
    characters: [],

}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_EPISODES':
            return {
                ...state,
                episodes: action.payload,
            }
        case 'GET_CHARACTERS':
            return {
                ...state,
                characters: action.payload,
            }
        default:
            return state
    }

}

