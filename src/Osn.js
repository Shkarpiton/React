import React, { useState } from 'react';
import Header from './Header';
import Map from './Map';
import Profile from './Profile';
import Exit from './Exit';
import PropTypes from "prop-types";


const pages={
    map: <Map />,
    profile: <Profile />,
    exit: <Exit />,
  }
  
  class Osn extends React.Component {
    static propTypes = {
      changelout:PropTypes.node   
    }
    constructor(){
      super();
  
      this.state = { page: 'map'}
    }
      
  
       goToPage = (page) => {
        this.setState({page})
      };
  

      changelout = () => {
        this.props.changelout('Forma')
      }
    render(){
      return (
        <div >
          <Header goToPage={this.goToPage} changelout={this.changelout} />
          {pages[this.state.page]}
        </div>
      );
    } 
  }
  
  export default Osn;