import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from 'Components/Menu/Menu';
import HomePage from 'Components/HomePage/HomePage';
import NotFoundPage from 'Components/NotFoundPage/NotFoundPage';
import AboutPage from 'Components/About/AboutPage';
import Footer from 'Components/Footer/Footer';
import Catalog from 'Components/Catalog/Catalog';
import 'App.module.css';

function App() {
  return (
    <Router>
      <div>
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;