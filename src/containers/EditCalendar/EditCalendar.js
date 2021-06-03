import React, {useEffect} from 'react';
import CalendarForm from '../../components/CalendarForm/CalendarForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { editCalendar, fetchCalendar } from '../../store/actions/calendarsActions';

const EditCalendar = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const calendar = useSelector(state => state.calendars.calendar);
  console.log('editCalendar', calendar);
  
  const editHandler = (calendar) => {
    dispatch(editCalendar(calendar));
  }

  useEffect(() => {
    console.log('useeffect');
    dispatch(fetchCalendar(params.id))
  }, [dispatch, params]);

  
  return(
    <CalendarForm onSubmit={editHandler}
                  calendar = {calendar}
                  btnText='Save'/>
  );
}

export default EditCalendar;