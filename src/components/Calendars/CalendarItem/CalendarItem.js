import React from 'react';
import './CalendarItem.css';
import { useSelector } from 'react-redux';

const CalendarItem = ({date, author, title, deleteHandler, editHandler}) => {
  let calendarDate = new Date(date);
  const dateNow = new Date();
  let diffDate = Math.floor((calendarDate - dateNow)/86400000);

  const user = useSelector(state=>state.users.user);
  const authorText = (user && user.username === author.username) ? "me" : author.username;

  calendarDate = calendarDate.toDateString();
  return(
    <>
      <li className="CalendarItem">
        <div className="CalendarItem__content">
          <p>{calendarDate}</p>
          <p>Author: {authorText} </p>
          <p>{title}</p>
          <p>Remain (days): {diffDate}</p>
        </div>
        {(user && user.username === author.username) ? 
                <div className="CalendarItem__buttons">
                  <button className="CalendarItem__buttons__btn CalendarItem__buttons__btn_editBtn"
                          onClick={editHandler}>Edit</button>
                  <button className="CalendarItem__buttons__btn CalendarItem__buttons__btn_deleteBtn"
                          onClick={deleteHandler}>Delete</button>
                </div> : null}       
      </li> 
    </>
   
  );
};

export default CalendarItem;