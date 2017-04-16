import React from 'react'
import {Component} from 'react'


class App extends Component{
  constructor(){
    super();
    this.state={
      txt:"name sake value"

    }
  }

  update(e){
    this.setState({txt: e.target.value})

  }

  render(){
    return(
      <div>
      <h1> {this.state.txt} </h1>
      <input type="text" onChange={this.update.bind(this)}/>
      </div>
   );
  }
}

export default App;
