import {ASTEROIDS_REQUEST, ASTEROIDS_SUCCESS, ASTEROIDS_FAIL} from '../actions/asteroids';

const initialState = {
    asteroidsData: [],

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ASTEROIDS_REQUEST: {
            return {...state,
            };
        }
        case ASTEROIDS_SUCCESS: {
            return {
                ...state,
                asteroidsData: action.payload.asteroidsData
            };
        }
        case ASTEROIDS_FAIL: {
            return {...state};
        }

        default: {
            return state;
        }
    }
}
