import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import './style.css';




const Header = ({goToPage}) => {

    const handlePage = (page) => {
        goToPage(page)
    }
    return(
    <div className="header">
      <div>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" >
            <img url="./ikon.png" />
          </Typography>
          <Button color="inherit" onClick={()=>handlePage('map')}>Map</Button>
          <Button color="inherit" onClick={()=>handlePage('profile')}>Profile</Button>
          <Button color="inherit" onClick={()=>handlePage('exit')}>Exit</Button>
      </div>
    </div>
  )};


export default Header;