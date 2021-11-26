
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

import Booking from './Components/Pages/HomePage/Booking/Booking';
import MyOrder from './Components/Pages/HomePage/MyOrder/MyOrder';
import AddService from './Components/Pages/Admin/AddService/AddService';
import OrderManage from './Components/Pages/Admin/OrderManage/OrderManage';
import AdminDashboard from './Components/Pages/Admin/AdminDashboard/AdminDashboard';









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
        <Route path="/myOrder">
          <MyOrder></MyOrder>
        </Route>
        <Route path="/admin">
          <AdminDashboard></AdminDashboard>
        </Route>


        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/orderManage">
          <OrderManage></OrderManage>
        </Route>

        <Route path="/booking/:serviceId">
          <Booking></Booking>
        </Route>
        {/* <PrivateRout path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRout> */}
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
