import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './style.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOut }   from "./actions";
import Exit from './Exit';
import Profile from './Profile';
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Link } from "react-router-dom";
import Map from './Map';


const Header = ({goToPage,changelout,logOut}) => {
  Header.propTypes = {
    goToPage: PropTypes.node,
    changelout: PropTypes.node,
    logOut:PropTypes.node
 }
 
  
    

    return(
    <div className="header">
      <div>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            
          </IconButton>
          <header>
          <nav>
            <ul>
              
              <li>
                <Link to="/map">Map </Link>
              </li>
              <li>
                <Link to="/profile">Profile </Link>
              </li>
              <li>
                <Link to="/exit">Exit</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>
              <Route path="/map" component={Map}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/exit" component={Exit} />
            </section>
        </main>
      </div>
    </div>
  )};


  export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(Header);