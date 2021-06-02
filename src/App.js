import './App.css';
import { Route, Switch } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import Main from './containers/Main/Main';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
  return (
    <>
      <AppToolbar />
      <NotificationContainer />
      <div className="App">
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </div>
    </>    
  );
}

export default App;
