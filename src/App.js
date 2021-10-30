
import './App.css';
import React from "react";
import {


  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './Components/Pages/Shared/Header/Header';
import Home from './Components/Pages/HomePage/Home/Home'
import Services from './Components/Pages/HomePage/Services/Services';
import Login from './Login/Login/Login';
import NotFound from './Components/Pages/NotFound/NotFound';
import Footer from './Components/Pages/Shared/Footer/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
