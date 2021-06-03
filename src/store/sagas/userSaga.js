import axios from "../../axios-calendar";
import {push} from "connected-react-router";
import {put} from "redux-saga/effects";
import {NotificationManager} from "react-notifications";
import { addUserSuccess, addUserError, loginUserSuccess, loginUserFailure, logoutUserSuccess } from "../actions/usersActions";


export function* registerUserSaga({user}) {
    try {
        const response = yield axios.post("/users", user);
        yield put(addUserSuccess(response.data));
        yield put(push("/"));
        yield NotificationManager.success("Register successful", "Success message", 5000);
    } catch(e) {
        if (e.response && e.response.data) {
            yield put(addUserError(e.response.data));
        } else {
            yield put(addUserError(e));
        }
    }
};

export function* loginUserSaga({user}) {
    try {
        const response = yield axios.post("/users/sessions", user);
        yield put(loginUserSuccess(response.data));
        yield put(push("/"))
        yield NotificationManager.success("Login success");
    } catch(e) {
        yield put(loginUserFailure(e.response.data));
    }
};

export function* logoutUserSaga() {
    try {
        yield axios.delete("/users/sessions");
        yield put(logoutUserSuccess());
        yield put(push("/"));
        yield NotificationManager.success("Logout success");
    } catch(e) {
        yield NotificationManager.error("Logout failure");
    }
};