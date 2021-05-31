import React, { useState } from 'react';
import Form from './Form';
import Osn from './Osn';



class App extends React.Component {
  state  = { changPage: "Forma" };
  changelout = (page) => {
    
    if (this.props.isLoggedIn) {
      this.setState({changPage:page})
    }else{
      this.setState({ changPage: "Forma" })
    }
  }

  render(){
    return (
      <div >
          
         
         <main data-testid="container">
            <section>{this.state.changPage=="Forma" ?<Form changelout={this.changelout}   /> : <Osn changelout={this.changelout} />}</section>
        </main>
      </div>
    );
  } 
}

export default App;
