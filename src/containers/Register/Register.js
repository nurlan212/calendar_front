import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormElement from '../../components/UI/FormElement/FormElement';
import UserForm from '../../components/UserForm/UserForm';
import { addUser } from '../../store/actions/usersActions';


const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.registerError);
  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const changeInputHandler = (e) => {
    const {name, value} = e.target;
    setState(prev => {
      return {...prev, [name]: value}
    });
  };

  const getFieldError = (fieldName) => {    
    try{
      return error.errors[fieldName].message;
    } catch (err) {
      return undefined;
    }
  };

  const createUserHandler = (e) => {
    e.preventDefault();    
    dispatch(addUser({...state}));
  };

  return(
    <UserForm title="Sign Up" onSubmit={createUserHandler}>
      <FormElement name="username"
                   label="Username"
                   type="text"
                   error={getFieldError("username")}
                   onChange={changeInputHandler}
                   value={state.username}/>
      <FormElement name="email"
                   label="Email"
                   type="email"
                   error={getFieldError("email")}
                   onChange={changeInputHandler}
                   value={state.email}/>
      <FormElement name="password"
                   label="Password"
                   type="password"
                   error={getFieldError("password")}
                   onChange={changeInputHandler}
                   value={state.password}/>
    </UserForm>
  );
};

export default Register;