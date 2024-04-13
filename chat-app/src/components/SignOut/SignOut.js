import React from 'react';
import { auth } from '../../Firebase';
import CustomButton from '../CustomButton/CustomButton';

const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log('User signed out');
      window.location.href = '/signin';
    }).catch(error => {
      console.error('Error signing out:', error);
    });
  };

  return (
    <div>
      {auth.currentUser && (
        <CustomButton className="sign-out" onClick={handleSignOut}>Sign Out</CustomButton>
        
      )}
      
    </div>
  );
};

export default SignOut;
