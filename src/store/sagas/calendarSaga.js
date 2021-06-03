import axios from "../../axios-calendar";
import {push} from "connected-react-router";
import {put} from "redux-saga/effects";
import {NotificationManager} from "react-notifications";
import { addCalendarError, 
         addCalendarSuccess, 
         deleteCalendarError, 
         deleteCalendarSuccess, 
         editCalendarError, 
         editCalendarSuccess, 
         fetchCalendarsError, 
         fetchCalendarsRequest, 
         fetchCalendarsSuccess,
         fetchCalendarSuccess,
         fetchCalendarError,
         fetchCalendars} from "../actions/calendarsActions";


export function* getCalendarsSaga() {
    try {
        const response = yield axios.get("/calendars");
        yield put(fetchCalendarsRequest());
        yield put(fetchCalendarsSuccess(response.data));
        yield put(push("/"));
    } catch(e) {
        if (e.response && e.response.data) {
            yield put(fetchCalendarsError(e.response.data));
        } else {
            yield put(fetchCalendarsError(e));
        }
    }
};

export function* getCalendarSaga({id}) {
  try {
      const response = yield axios.get("/calendars/" + id);
      yield put(fetchCalendarSuccess(response.data));
  } catch(e) {
      if (e.response && e.response.data) {
          yield put(fetchCalendarError(e.response.data));
      } else {
          yield put(fetchCalendarError(e));
      }
  }
};

export function* addCalendarSaga({calendar}) {
    try {
        const response = yield axios.post("/calendars/", calendar);
        yield put(addCalendarSuccess(response.data));
        yield put(push("/"));
    } catch(err) {
        yield put(addCalendarError(err));
    }
};

export function* editCalendarSaga({calendar}) {
  console.log('calendar', calendar);
    try {
        yield axios.put(`/calendars/${calendar._id}`, calendar);
        yield put(editCalendarSuccess());
        yield put(push("/"));
    } catch(err) {
        yield NotificationManager.error("Edit failure");
        yield put(editCalendarError(err));
    }
};

export function* deleteCalendarSaga({id}) {
  try{
    yield axios.delete(`/calendars/${id}`);
    yield put(deleteCalendarSuccess());
    yield put(fetchCalendars());
  } catch(err) {
    yield put(deleteCalendarError(err));
  }
}