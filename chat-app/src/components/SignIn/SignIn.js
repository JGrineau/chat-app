import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import { auth, googleAuthProvider } from '../../Firebase';
import { signInWithPopup } from 'firebase/auth';

import './SignIn.css'

const SignIn = ({handleSignIn}) => {
      
        const signInWithGoogle = async () => {
          try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result);
            handleSignIn();
          } catch (error) {
            console.log(error);
          }
        };

  return (
    <div>
        <h1 className='title'>Welcome to JP's Chat page</h1>
        <div className='google-button'>
      <CustomButton onClick={signInWithGoogle}>Sign in With Google</CustomButton>
      </div>
    </div>
  )
}

export default SignIn
