import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  if (!isAuthenticated) {
    return <p>Please log in to see your profile.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Profile;
