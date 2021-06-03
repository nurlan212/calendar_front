import {takeEvery} from "redux-saga/effects";
import {addCalendarSaga, 
        editCalendarSaga, 
        getCalendarsSaga,
        getCalendarSaga, 
        deleteCalendarSaga} from "./calendarSaga";
import {registerUserSaga, loginUserSaga, logoutUserSaga} from './userSaga'
import {ADD_CALENDAR, 
        ADD_USER, 
        DELETE_CALENDAR, 
        EDIT_CALENDAR, 
        FETCH_CALENDARS, 
        LOGIN_USER, 
        LOGOUT_USER, 
        FETCH_CALENDAR} from "../actionTypes";

export function* rootSaga() {
    yield takeEvery(ADD_USER, registerUserSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(LOGOUT_USER, logoutUserSaga);

    yield takeEvery(FETCH_CALENDARS, getCalendarsSaga);
    yield takeEvery(FETCH_CALENDAR, getCalendarSaga);
    yield takeEvery(ADD_CALENDAR, addCalendarSaga);
    yield takeEvery(EDIT_CALENDAR, editCalendarSaga);
    yield takeEvery(DELETE_CALENDAR, deleteCalendarSaga);
}