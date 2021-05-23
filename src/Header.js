import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import './style.css';




const Header = ({goToPage,navigateStran}) => {

  const changePage = (page) => {
    navigateStran(page)
  }
    const handlePage = (page) => {
        goToPage(page)
    }
    return(
    <div className="header">
      <div>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            
          </IconButton>
          <div className="h6" >
            <img src="./ikon.png" />
          </div>
          <Button color="inherit" onClick={()=>handlePage('map')}>Map</Button>
          <Button color="inherit" onClick={()=>handlePage('profile')}>Profile</Button>
          <Button color="inherit" onClick={()=>changePage('exit')}>Exit</Button>
      </div>
    </div>
  )};


export default Header;