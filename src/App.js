import React from 'react'
import Navbar from './components/element/Navbar'
import AddContacts from './containers/Addcontainer'
import Contacts from './containers/Homecontainer'
import Editcontact from './containers/Updatecontainer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
      <Router>
        <Navbar />
        <div className="container mt-5">
        <Switch>
          <Route exact path="/add-contacts">
            <AddContacts />
          </Route>
          <Route exact path="/edit-contacts/:id">
            <Editcontact />
          </Route>
          <Route exact path="/">
            <Contacts />
          </Route>
        </Switch>
        </div>
      </Router>
  );
}

export default App;
