import {APOD_REQUEST, APOD_SUCCESS, APOD_FAIL} from '../actions/apod';

const initialState = {
    apodData: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case APOD_REQUEST: {
            return {...state,
            };
        }
        case APOD_SUCCESS: {
            return {
                ...state,
                apodData: action.payload.apodData
            };
        }
        case APOD_FAIL: {
            return {...state};
        }

        default: {
            return state;
        }
    }
}
