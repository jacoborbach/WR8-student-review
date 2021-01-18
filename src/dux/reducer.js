import axios from 'axios';

const initalState = {
    wildPokemon: [],
    caughtPokemon: []
}

const GET_WILD_POKEMON = 'GET_WILD_POKEMON';

export function getWildPokemon() {
    const rand = Math.ceil(Math.rand() * 151);
    const data = axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`)
        .then(res => res.data)
    return {
        type: GET_WILD_POKEMON,
        payload: data
    }
}

export default function reducer(state = initalState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_WILD_POKEMON + '_PENDING':
            return { ...state };

        case GET_WILD_POKEMON + '_FULFILLED':
            return { ...state, wildPokemon: [payload] }

        default:
            return state
    }
}