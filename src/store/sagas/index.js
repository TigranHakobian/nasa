import { all, fork } from "redux-saga/effects";
import apod from "./aopd";
import asteroids from "./asteroids";

export default function* root() {
    const sagas = [
        apod,
        asteroids,
    ];
    yield all(sagas.map(fork));
}
