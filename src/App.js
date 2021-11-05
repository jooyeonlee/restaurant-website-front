import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './routes/Home/Home';
import Menu from './routes/Menu/Menu';
import Reserv from './routes/Reservation/Reserv';
import Checkout from './routes/Checkout/Checkout';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Reset from './routes/Reset/Reset';
import Dashboard from './routes/Dashboard/Dashboard';
import Orders from './routes/Orders/Orders';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div style={{flex: 1}}>
      <Router>
        <Header />
        <Switch>
          {/* Public Routes */}
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/reservation' component={Reserv} />
          <Route path="/about" component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/reset' component={Reset} />

          {/* Private Rotes */}
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/checkout' component={Checkout} />
          <PrivateRoute exact path='/orders' component={Orders} />

          <Redirect from='*' to='/' />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
