import { render } from '@testing-library/react';
import React from 'react';
import './style.css';



class Vxod extends React.Component {

  handlePage = (page) => {
    this.props.navigateTo(page)
  }
  
  changePage = (page) => {
    this.props.navigateStran(page)
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
      
        <label className="input">
          <input type="text"/>
            <span><span>Username</span></span>
        </label>

        <label className="input">
          <input type="text"/>
            <span><span>Password</span></span>
          
        </label>
        <button className="btn"
        onClick={()=>this.changePage('Osnova')}
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