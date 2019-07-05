import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../../presentational/Hello.js';
import Mynavbar from '../../presentational/navbar/Mynavbar.js';

class App extends Component{

  constructor(props){
    super()
  }
  render(){
    return (
      <div className='wrapper'>
        <Mynavbar></Mynavbar>
        <Hello name='홍길동'></Hello>
      </div>
        
    );
  }
}
export default App;
