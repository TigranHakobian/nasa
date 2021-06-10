import {combineReducers} from 'redux'
import apod from './apod';
import asteroids from './asteroids';

export default combineReducers({
    apod,
    asteroids,
});
