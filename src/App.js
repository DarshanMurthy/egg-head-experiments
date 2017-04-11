import React from 'react'


class App extends React.Components{
  constructor(){
    super();
    this.state=
    {
      txt:"name sake values"
    }

  }

  render(){
    return(
      <h1>
        { this.state.txt}
      </h1>
    )
  }
}


export default App
