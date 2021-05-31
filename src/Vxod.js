import { render } from '@testing-library/react';
import React from 'react';
import './style.css';
import {withAuth} from './AuthContext';



class Vxod extends React.Component {
    
  handlePage = (page) => {
    this.props.navigateTo(page)
  }
  
  changelout = (page) => {
    this.props.changelout('Osn')
  };
  
  authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    this.props.logIn(email.value, password.value);
  };
  
 
  
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
               
              />
            <span><span>Имя</span></span>
        </label>

        <label className="input">
          <input type="text"  
              
              />
            <span><span>Пароль</span></span>
          
        </label>
        </form>
        <button className="btn"
        
        
        >
          Войти
        </button>
        
</div>
</div>   
</div>
  </div>
  </div>
  </div>
  
  );
  
}
}
export default Vxod;
