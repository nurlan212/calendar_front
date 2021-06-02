import axios from 'axios';
import store from './store/configStore';

const instanse = axios.create({
  baseURL: "http://localhost:8000/"
});

instanse.interceptors.request.use(req => {
  const user = store.getState().users.user;
  if(user) req.headers["Authenticate"] = user.token;

  return req;
})

export default instanse;