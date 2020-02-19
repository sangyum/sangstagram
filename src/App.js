import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { FirestoreProvider} from 'react-firestore';
import firebaseConfig from './firebaseConfig';
import Views from './views';

firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <FirestoreProvider firebase={firebase}>
      <CssBaseline />
      <Views />
    </FirestoreProvider>
  );
}

export default App;
