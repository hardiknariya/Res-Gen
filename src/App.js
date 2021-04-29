import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Menu from './Component/Menu';
import Home from './Component/Home';
import Contact from './Component/Contact';
import CreateResume from './Component/CreateResume';
import Resumepdf from './Component/Resumepdf';
import './App.css';


class App extends Component{
 render(){
  return (
    
      <Router>
			<Menu/>
			<Switch>
				<Route  path="/" exact component={Home}/>
				<Route path="/CreateResume" component={CreateResume}/>
				<Route path="/contact" component={Contact}/>
				<Route path="/Resumepdf" component={Resumepdf}/>
			</Switch>	
		</Router>
   
  );
 }
}

export default App;
