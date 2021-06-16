import React, { useState } from 'react';
import Header from './Header';
import Map from './Map';
import Profile from './Profile';
import Exit from './Exit';
import PropTypes from "prop-types";



  
  class Osn extends React.Component {
    static propTypes = {
      changelout:PropTypes.node   
    }
    
      
  
       
  

      changelout = () => {
        this.props.changelout('Forma')
      }
    render(){
      return (
        <div >
          <Header changelout={this.changelout} />
          
        </div>
      );
    } 
  }
  
  export default Osn;