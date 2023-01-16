import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { authActions } from './store/index';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = () => {
    dispatch(authActions.login());
  };
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Header />
      {auth && <UserProfile />}
      {!auth && <Auth  />}
      <Counter />
    </>
  );
}

export default App;


