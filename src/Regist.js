
import { render } from '@testing-library/react';
import React from 'react';
import './style.css';

class Regist extends React.Component {
  render(){
    
  return (
    
    <div className="middle">  
    <div id="fancy-inputs">
      <div className="fynd">
        <div className="cartin"></div>
        <div className="regist">
          <h1 className="regist-title">Войти</h1>
          <div className="regist-cont">
            <span className="regist-text">Уже зарегистрирован?</span>
            <span>
              <a id="vxodsulka" className="regist-sulka" href="#">Войти</a>
            </span>
          </div>
        
          <label className="input">
            <input type="text"/>
              <span><span>Адрес электронной почты</span></span>
          </label>
          <div id="nik">
          <label className="input_nik input ">
            <input type="text"/>
              <span><span>Имя</span></span>
          </label><label className=" input_nik input ">
            <input type="text"/>
              <span><span>Фамилия</span></span>
          </label>
        </div>
          <label className="input">
            <input type="text"/>
              <span><span>Пароль</span></span>
            
          </label>
          <button className="btn">
            Зарегистрироваться
          </button>
  </div>    
  </div>
    </div>
    </div>
);
}
}

export default Regist;