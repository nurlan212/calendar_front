import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import Main from './containers/Main/Main';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import { useSelector } from 'react-redux';
import AddCalendar from './containers/AddCalendar/AddCalendar';
import EditCalendar from './containers/EditCalendar/EditCalendar';

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
  return isAllowed ?     
                   <Route {...props} /> :
                   <Redirect to = {redirectTo}  />    
}

function App() {
  const user = useSelector(state => state.users.user);

  return (
    <>
      <AppToolbar />
      <NotificationContainer />
      <div className="App">
        <Switch>
          <ProtectedRoute isAllowed = {!!user} redirectTo='/login' path = {'/'} exact component = {Main}/>
          <ProtectedRoute isAllowed = {!!user} redirectTo='/login' path = {'/calendars/create'} exact component = {AddCalendar}/>
          <ProtectedRoute isAllowed = {!!user} redirectTo='/login' path = {'/calendars/edit/:id'} exact component = {EditCalendar}/>
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </div>
    </>    
  );
}

export default App;
