import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as firebase from 'firebase';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';
import 'firebase/firestore';
import { FirestoreProvider} from 'react-firestore';
import firebaseConfig from './firebaseConfig';
import Views from './views';

const firebaseApp = firebase.initializeApp(firebaseConfig)

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App({
  user,
  signOut,
  signInWithGoogle,
}) {
  return (
    <FirestoreProvider firebase={firebase}>
      <CssBaseline />
      <Views />
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
    </FirestoreProvider>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
