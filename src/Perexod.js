import React from 'react';
import Form from './Form';
import Osn from './Osn';
import Vxod from './Vxod';


class Perexod extends React.Component {
    state  = { changPage: "Forma" };
    navigateStran = (page) => {
    this.setState({formPage:page})
  }
  
  navigateTo = (page) => {
    this.setState({formPage:page})
  }
   
     
   
   render(){
      
   return (
     <div className="perex">
        <main data-testid="container">
            <section>{this.state.changPage=="Forma" ?<Vxod navigateStran={this.navigateStran} navigateTo={this.navigateTo}  /> : <Osn navigateStran={this.navigateStran} />}</section>
        </main>
   </div>
   );
 }
 }
 export default Perexod;