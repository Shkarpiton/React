import React from 'react';
import Form from './Form';
import Osn from './Osn';
import Vxod from './Vxod';


class Perexod extends React.Component {
    state  = { changPage: "Osnova" };
    navigateStran = (page) => {
    this.setState({formPage:page})
  }
  
   
     
   
   render(){
      
   return (
     <div className="perex">
        <main data-testid="container">
            <section>{this.state.changPage=="Osnova" ?<Vxod navigateStran={this.navigateStran} /> : <Osn navigateStran={this.navigateStran} />}</section>
        </main>
   </div>
   );
 }
 }
 export default Perexod;