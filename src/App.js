import logo from './logo.svg';
import './App.css';


import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 

import Home from './Home.js'; 
import About from './About.js'; 
import Header from './Header.js'; 
import Footer from './Footer.js'; 
import Carousel from './Carousel'; 
import Login from './Login.js'; 
import Clients from './Clients.js'; 
import Toolbar from './Toolbar.js'; 


function App() {
  return(    
    

  <Router> 
    
    <div> 
      <Header /> 
    </div> 
    <div className="app__middle"> 
      <div className="app__toolbar"> 
        <Toolbar /> 
      </div> 
      <div className="app__body"> 
        <Switch>
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route path="/Clients"> 
              <Clients /> 
            </Route> 
            <Route path="/Landing"> 
              <Login /> 
            </Route> 
            <Route path="/About">
              <About /> 
            </Route>
        </Switch>
      </div>
    </div>  
      <br/> 
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
      
     
  </Router>
  
  ); 
}

export default App;
