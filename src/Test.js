import React from 'react'
import {Component} from 'react'


class App extends Component{
  constructor(){
    super();
    this.state={
      txt:"name sake value"

    }
  }
  render(){
    return(<h1> this.state.txt </h1>);
  }
}

export default App;
