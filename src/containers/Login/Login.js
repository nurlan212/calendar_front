import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, AlertTitle} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";
import FormElement from '../../components/UI/FormElement/FormElement';
import UserForm from '../../components/UserForm/UserForm';
import {loginUser} from '../../store/actions/usersActions';

const useStyles = makeStyles(() => ({
  alert: {
      width: '100%',
  },
}));

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.loginError);
  const classes = useStyles();
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const changeInputHandler = (e) => {
    const {name, value} = e.target;
    setState(prev => {
      return {...prev, [name]: value}
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({...state}));
  };

  return(
    <UserForm title="Sign In"
              onSubmit={onSubmitHandler}>
      {error && <Alert
                  severity="error"
                  className={classes.alert}
                >
                  <AlertTitle>Error</AlertTitle>
                  {error.error}
                </Alert>}
      <FormElement name="username"
                   label="Username"
                   type="text"
                   onChange={changeInputHandler}
                   value={state.username}/>
      <FormElement name="password"
                   label="Password"
                   type="password"
                   onChange={changeInputHandler}
                   value={state.password}/>
    </UserForm>
  );
};

export default Login;