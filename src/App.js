import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'firebase/firestore';
import { FirestoreProvider} from 'react-firestore';
import { firebase } from './firebase';
import Views from './views';

function App() {
  return (
    <FirestoreProvider firebase={firebase}>
      <CssBaseline />
      <Views />
    </FirestoreProvider>
  );
}

export default App;
