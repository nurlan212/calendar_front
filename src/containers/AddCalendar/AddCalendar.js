import React from 'react';
import CalendarForm from '../../components/CalendarForm/CalendarForm';
import { useDispatch } from 'react-redux';
import { addCalendar } from '../../store/actions/calendarsActions';

const AddCalendar = () => {
  const dispatch = useDispatch();

  const calendar = {
    title: '',
    text: '',
    date: new Date()
  };

  const createHandler = (calendar) => {
    dispatch(addCalendar(calendar));
  }
  return(
    <CalendarForm onSubmit={createHandler}
                  btnText='Create'
                  calendar={calendar}/>
  );
}

export default AddCalendar;