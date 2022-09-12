import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Navbar from "./Components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./Components/pages/NotFound";
import AddUser from "./Components/users/AddUser";
import EditUser from "./Components/users/EditUser";
import User from "./Components/users/User";
import Contactus from "./Components/pages/Contact us";
import Addperson from "./Components/users/Addperson"
import Shahab from "./Components/users/Shahab.js"
function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/Contact us" component={Contactus} />
          <Route exact path="/Addperson" component={Addperson} />
          <Route exact path="/Shahab" component={Shahab} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
