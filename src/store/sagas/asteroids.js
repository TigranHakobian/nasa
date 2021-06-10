import {takeLatest, call, put} from 'redux-saga/effects';
import {ASTEROIDS_REQUEST, ASTEROIDS_SUCCESS, ASTEROIDS_FAIL} from '../actions/asteroids';
import * as api from '../../api';

function* handleAsteroidsRequest(action) {
    try {
        const data = yield call(api.getAsteroids, action.payload.startDate, action.payload.endDate);
        yield put({
            type: ASTEROIDS_SUCCESS,
            payload: {asteroidsData: data},
        });
    } catch (e) {
        console.log(e);
        yield put({
            type: ASTEROIDS_FAIL,
            message: e.message,
        });
    }
}


export default function* watchers() {
    yield takeLatest(ASTEROIDS_REQUEST, handleAsteroidsRequest);
}
