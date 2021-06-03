import { ADD_CALENDAR, 
         ADD_CALENDAR_ERROR, 
         ADD_CALENDAR_SUCCESS, 
         DELETE_CALENDAR, 
         DELETE_CALENDAR_ERROR, 
         DELETE_CALENDAR_SUCCESS, 
         EDIT_CALENDAR, 
         EDIT_CALENDAR_ERROR, 
         FETCH_CALENDARS, 
         FETCH_CALENDARS_ERROR, 
         FETCH_CALENDARS_REQUEST, 
         FETCH_CALENDARS_SUCCESS,
         FETCH_CALENDAR,
         FETCH_CALENDAR_SUCCESS,
         FETCH_CALENDAR_ERROR } from '../actionTypes';

export const fetchCalendars = () => {
  return {type: FETCH_CALENDARS};
};
export const fetchCalendarsRequest = () => {
  return {type: FETCH_CALENDARS_REQUEST};
};
export const fetchCalendarsSuccess = calendars => {
  return {type: FETCH_CALENDARS_SUCCESS, calendars};
};
export const fetchCalendarsError = error => {
  return {type: FETCH_CALENDARS_ERROR, error};
};

export const fetchCalendar = (id) => {
  return {type: FETCH_CALENDAR, id};
};
export const fetchCalendarSuccess = calendar => {
  return {type: FETCH_CALENDAR_SUCCESS, calendar};
};
export const fetchCalendarError = error => {
  return {type: FETCH_CALENDAR_ERROR, error};
};


export const addCalendar = calendar => {
  return {type: ADD_CALENDAR, calendar};
};
export const addCalendarSuccess = calendar => {
  return {type: ADD_CALENDAR_SUCCESS, calendar};
};
export const addCalendarError = error => {
  return {type: ADD_CALENDAR_ERROR, error};
};

export const editCalendar = calendar => {
  return {type: EDIT_CALENDAR, calendar};
};
export const editCalendarSuccess = () => {
  return {type: ADD_CALENDAR_SUCCESS};
};
export const editCalendarError = error => {
  return {type: EDIT_CALENDAR_ERROR, error};
};

export const deleteCalendar = (id) => {
  return {type: DELETE_CALENDAR, id};
};
export const deleteCalendarSuccess = () => {
  return {type: DELETE_CALENDAR_SUCCESS};
};
export const deleteCalendarError = error => {
  return {type: DELETE_CALENDAR_ERROR, error}
};