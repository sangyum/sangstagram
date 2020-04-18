import React from 'react';
import Typography from '@material-ui/core/Typography';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';
import { firebaseApp, firebase } from '../firebase';
import FollowingButton from './following/followingbutton';

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const Views = ({
    user,
    signOut,
    signInWithGoogle,
  }) => {
    return (
        <>
        <Typography variant="h1">Sangstagram</Typography>
        {
            user 
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
          { user && <FollowingButton/> }
        </>
    )
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Views);