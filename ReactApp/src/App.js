import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import AccueilScreen from './3.AccueilScreen';
import HistoireScreen from './4.HistoireScreen'
import AnniversairesScreen from './5.AnniversairesScreen'
import MenuScreen from './6.MenuScreen'
import GallerieScreen from './7.GallerieScreen';
import Contact from './8.ContacteScreen'
import Visite from './9.VisiteScreen'
import Email from './10.EmailConfirmation'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={AccueilScreen} path="/" exact />
        <Route component={HistoireScreen} path="/notrehistoire" exact />
        <Route component={AnniversairesScreen} path="/anniversaires" exact />
        <Route component={MenuScreen} path="/menu" exact />
        <Route component={GallerieScreen} path="/gallerie" exact />
        <Route component={Contact} path="/contact" exact />
        <Route component={Visite} path="/visite" exact />
        <Route component={Email} path="/confirmationemail" exact />
      </Switch>
    </Router>
  );
}

export default App;
