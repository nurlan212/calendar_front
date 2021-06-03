import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Calendars from '../../components/Calendars/Calendars';
import { fetchCalendars, deleteCalendar } from '../../store/actions/calendarsActions';
import './Main.css';
import { push } from 'connected-react-router';

const Main = () => {
  const dispatch = useDispatch();
  
  const calendars = useSelector(state => state.calendars.calendars);

  useEffect(() => {
    dispatch(fetchCalendars());
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteCalendar(id));
  };

  const editHandler = (calendarId) => {
    dispatch(push(`/calendars/edit/${calendarId}`));
  }

  return(
    <div className="Main">
      <Calendars calendars = {calendars}
                 deleteHandler = {deleteHandler}
                 editHandler = {editHandler}/>
    </div>
  );
};

export default Main;