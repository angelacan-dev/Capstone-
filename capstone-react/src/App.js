import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Contact from './components/Contact';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Home from './components/Home';
import Update from './components/Update';
import Rates from './components/Rates';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

function App() {

  return (
    <Router> {/* //do not need switch here because Router is routing for us */}
      <div className="App">
        <Header />
        <Route exact path="/">
          <Content />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route exact path="/rates">
          <Rates />
        </Route>
        <Route exact path="/updateprofile">
          <Update />
        </Route>
        <Route exact path="/logout">
          <Content />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}



export default App;