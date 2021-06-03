import React, {useState, useEffect} from 'react';
import 'date-fns';
import { Button, Grid, makeStyles, TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const CalendarForm = ({onSubmit, calendar, btnText}) => {
  const classes = useStyles();
  const [state, setState] = useState({
    title: '',
    text: ''
  });

  useEffect(() => {
    setState(prev => {
      return {...prev, title: calendar.title, text: calendar.text};
    });
    setSelectedDate(calendar.date);
  }, [calendar]);

  const inputChange = (e) => {
    const {name, value} = e.target;
    setState(prev => {
      return {...prev, [name]: value}
    })
  }
  const [selectedDate, setSelectedDate] = useState(calendar.date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  return(    
    <Grid container direction='column'>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid item>
          <TextField label="Title" name='title' value={state.title} onChange={inputChange}/>
        </Grid>
        <Grid item>
          <TextField label="Text" multiline rows={4} variant="outlined" name='text' value={state.text} onChange={inputChange}/>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />            
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item >
          <Button variant="contained" color="primary"
                  onClick = {() => {
                    const curCalendar = {
                      _id: calendar._id,
                      title: state.title,
                      text: state.text,
                      date: selectedDate
                    };
                    onSubmit(curCalendar);
                    }}>{btnText}</Button>
        </Grid>        
      </form>
    </Grid>
  );
};

export default CalendarForm;