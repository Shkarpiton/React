import React, { useState } from 'react';
import './style.css';

const Profile = () => <div id="fancy-inputs">
<div class="middle">
  <div class="zagol">
<h1>Профиль</h1>
<h4>Способ оплаты</h4>
</div>
<div className="main">
<div className="cardanddata">
      <label className="input">
        <input type="text"/>
          <span><span>Номер карты*</span></span>
      </label>

      <label className="input"/>
      <span className="expiration">
    <input className="expiration-inp" type="text" name="month" placeholder="MM" maxlength="2" size="2" />
    <span>/</span>
    <input className="expiration-inp" type="text" name="year" placeholder="YY" maxlength="2" size="2" />
</span>
        </div>
      
    
    <div className="nikandcvc">
      <label className="input">
        <input type="text"/>
          <span><span>Имя владельца*</span></span>
      </label>

      <label className="input"/>
        <input type="text"/>
          <span><span>CVC*</span></span>
        </div>
      
    </div>
    </div>
  </div>

export default Profile;