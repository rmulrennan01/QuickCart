import logo from './logo.svg';
import './App.css';


import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 

import Home from './Home.js'; 
import About from './About.js'; 
import Header from './Header.js'; 
import Footer from './Footer.js'; 
import Carousel from './Carousel'; 
import Login from './Login.js'; 


function App() {
  return(    
  <Router> 
    <div> 
    <Header /> 
      <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/Landing"> 
            <Login /> 
          </Route> 
          <Route path="/About">
            <About /> 
          </Route>
      </Switch>
      <br/> 
      <br/>       <br/> 
      <br/>       <br/> 
      <br/> 
      <div> 
        <Carousel /> 
      </div>
      <br/>       <br/> 
      <br/>       <br/> 
      <br/>       <br/> 
      <div> 
        <Footer /> 
      </div> 
    </div> 
  </Router>
  ); 
}

export default App;
