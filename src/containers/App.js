import React, { Component } from 'react';
import CreateurPersonnage from './createurPersonnage/CreateurPersonnage';
import ListPersonnage from './ListPersonnage/ListPersonnage';

class App extends Component {
  state = {
    refresh : false
  }
  
handleRefresh =() => {
  this.setState(oldState =>{
    return {
      refresh:!oldState.refresh
    }
  });
}

  render()
    {   
      return (
        <>
          <CreateurPersonnage refresh = {this.handleRefresh}/>
          <ListPersonnage refresh = {this.state.refresh}/>
        </>

      );
    } 
}

export default App;
