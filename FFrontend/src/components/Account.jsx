import React from 'react';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const Account = () => {
  const { user, loading } = useSelector(state => state.userReducer);

  return (
    <div>
      {loading ? <Loader /> : <h1 className='text-3xl font-bold m-2 text-center'>Profile</h1>}
    </div>
  );
};

export default Account;
