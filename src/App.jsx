import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.js';


import Login from './routes/Login.jsx';
import Profile from './routes/Profile.jsx';

const App = () => (
  <Provider store={store}>
    <div>
     <Login/>
      <Profile/>
    </div>
  </Provider>
);

export default App;
