import React from 'react';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Calendars.css';
import CalendarItem from './CalendarItem/CalendarItem';

const Calendars = ({calendars, deleteHandler, editHandler}) => {
  return(
    <>
      <Button  component = {Link} to='/calendars/create'>Add new</Button>
      <ul className='Calendars'>
        {calendars.map(calendar => {
          return <CalendarItem key = {calendar._id} 
                               author = {calendar.author}
                               title = {calendar.title} 
                               date = {calendar.date}
                               deleteHandler = {() => {deleteHandler(calendar._id)}}
                               editHandler = {() => {editHandler(calendar._id)}}/>
        })}
      </ul>
    </>
  );
};

export default Calendars;