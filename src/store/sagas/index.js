import {takeEvery} from "redux-saga/effects";
import {loginUserSaga, logoutUserSaga, registerUserSaga} from "./userSaga";
import {ADD_USER, LOGIN_USER, LOGOUT_USER} from "../actionTypes";

export function* rootSaga() {
    yield takeEvery(ADD_USER, registerUserSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(LOGOUT_USER, logoutUserSaga);
}