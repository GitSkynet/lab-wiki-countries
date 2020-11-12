import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList'
import CountryDetails from './Components/CountryDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="divapp">
      <CountriesList />
      <Switch> 
        <Route exact path="/:cca3" render={props => (
          <CountryDetails {...props} />
        )}/>
      </Switch>
      
      {/* <Switch>
        <Route exact path='/country' component={CountriesList}/>
        <Route exact path='/country/:cca3' component={CountryDetails}/>
      </Switch> */}
      </div>
      
    </div>
  );
}

export default App;
