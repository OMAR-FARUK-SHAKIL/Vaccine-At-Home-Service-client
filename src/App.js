import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./components/Login/Login/Login";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddAdmin from "./components/AddAdmin/AddAdmin";
import AddReview from "./components/AddReview/AddReview";
import AddService from "./components/AddService/AddService";
import OrderService from "./components/OrderService/OrderService";
import AllServices from "./components/Dashboard/AllServices/AllServices";
import AllOrders from "./components/Dashboard/AllOrders/AllOrders";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
      </PrivateRoute>

     <Route path="/addReview">
       <AddReview></AddReview>
      </Route>

      <Route path="/login">
        <Login></Login>
      </Route>

      <Route path="/home">
          <Home></Home>
      </Route>

      <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
      </Route>

      <PrivateRoute path="/orderAService">
            <OrderService></OrderService>
      </PrivateRoute>

      <Route path="/allServices">
            <AllServices></AllServices>
      </Route>

      <Route path="/allOrders">
            <AllOrders></AllOrders>
      </Route>

      <Route exact path="/">
        <Home></Home>
     </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
