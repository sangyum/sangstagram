import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import 'firebase/firestore';
import { FirestoreProvider} from 'react-firestore';
import { firebase } from './firebase';
import './App.css';
import Posts from './views/posts';
import Foo from './views/foo';
import Activity from './views/activity';
import Profile from './views/profile';
import Upload from './views/upload';
import CenteredTabs from './Tabs';

function App() {
  const user = {
    name: 'sangyum',
    userAvatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/arkokoley/128.jpg'
  }
  
  return (
    <FirestoreProvider firebase={firebase}>
      <CssBaseline />
      <Container maxWidth="md">
        <Router>

          <div className="Tabs">
            <CenteredTabs />
          </div>

          <Switch>
            <Route path='/posts'>
              <Posts user={user} />
            </Route>
            <Route path='/foo' component={Foo} />
            <Route path='/activity' component={Activity} />
            <Route path='/profile' component={Profile} />
            <Route path='/upload' component={Upload} />
          </Switch>
        </Router>
      </Container>
    </FirestoreProvider>
  );
}

export default App;
