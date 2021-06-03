import { ADD_CALENDAR_ERROR, 
         ADD_CALENDAR_SUCCESS, 
         DELETE_CALENDAR_ERROR, 
         DELETE_CALENDAR_SUCCESS, 
         EDIT_CALENDAR_SUCCESS,
         EDIT_CALENDAR_ERROR, 
         FETCH_CALENDARS_ERROR, 
         FETCH_CALENDARS_REQUEST,
         FETCH_CALENDARS_SUCCESS,
         FETCH_CALENDAR_SUCCESS,
         FETCH_CALENDAR_ERROR } from "../actionTypes";

const initState = {
  calendars: [],
  error: null,
  calendar: {
    title: '',
    text: '',
    date: new Date()
  },
  calendarError: null,
  addError: null,
  editError: null,
  deleteError: null,
  isLoading: false
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case FETCH_CALENDARS_REQUEST:
      return {...state, isLoading: true};
    case FETCH_CALENDARS_SUCCESS:
      return {...state, calendars: action.calendars, isLoading: false, error: null};
    case FETCH_CALENDARS_ERROR:
      return {...state, error: action.error, isLoading: false};
    case FETCH_CALENDAR_SUCCESS:
      return {...state, calendar: action.calendar, calendarError: null};
    case FETCH_CALENDAR_ERROR:
        return {...state, calendarError: action.error};
    case ADD_CALENDAR_SUCCESS:
      return {...state, addError: null};
    case ADD_CALENDAR_ERROR:
      return {...state, addError: action.error};
    case EDIT_CALENDAR_SUCCESS:
      return {...state, editError: null};
    case EDIT_CALENDAR_ERROR:
      return {...state, editError: action.error}
    case DELETE_CALENDAR_SUCCESS:
      return {...state, deleteError: null};
    case DELETE_CALENDAR_ERROR:
      return {...state, deleteError: action.error};
    default:
      return state;
  }
};

export default reducer;