import { render } from '@testing-library/react';
import React, { Component } from "react";
import PropTypes from "prop-types";
import  {authenticate}  from "./actions";
import { connect } from "react-redux";

class Vxod extends React.Component {

  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.authenticate(email.value, password.value);
  };

  static propTypes = {
    navigateTo:PropTypes.node,
    logIn :PropTypes.node,
    isLoggedIn: PropTypes.node
  }
  
  state  = { email: "", password:"" };
  handlePage = (page) => {
    this.props.navigateTo(page)
  }
  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

  

  
  handleInput = (event) => {
    const target = event.target
    this.setState ({[target.name]:target.value})
  }
  
  render(){
    
  return (
    <div className="stran">
    <div className="picture">
      <img src="./ikon.png"/>
      </div>
    <div className="forma">
      <div className="middle">
  <div id="fancy-inputs">
    <div className="fynd">
      <div className="cartin"></div>
      <div className="regist">
        <h1 className="regist-title">Войти</h1>
        <div className="regist-cont">
          <span className="regist-text">Новый пользователь?</span>
          <span>
          <a id="registsulka" className="regist-sulka" href="#" color="inherit"
             onClick={()=>this.handlePage('Register')}
             >
              Зарегистрируйтесь
              </a>
          </span>
        </div>
        <form id="loginForm" onSubmit={this.authenticate}>
        <label className="input">
          <input type="text" 
               value = {this.state.email}
               onChange = {this.handleInput}
               name = "email"
              />
            <span><span>Имя</span></span>
        </label>

        <label className="input">
          <input type="text"  
              value = {this.state.password}
              onChange = {this.handleInput}
              name = "password"
              />
            <span><span>Пароль</span></span>
          
        </label>
        <button className="btn"
         type = "submit"
        
        >
          Войти
        </button>
        </form>
        
        
</div>
</div>   
</div>
  </div>
  </div>
  </div>
  
  );
  
}
}
export const VxodWithConnect = connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { authenticate }
)(Vxod);
