import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../components/Hello.jsx'
import Mynavbar from '../containers/Mynavbar.js';
import ControlledCarousel from './ControlledCarousel'
import Login from './Login.js'
import Join from './Join.js'

class App extends Component{

  constructor(props){
    super()
  }
  render(){
    return (
      <div className='wrapper'>
        <Mynavbar></Mynavbar>
        <ControlledCarousel></ControlledCarousel>
        <br></br>
        <Login></Login>
        <Join></Join>
        <Hello name='홍길동...'></Hello>
      </div>
        
    );
  }
}
export default App;
