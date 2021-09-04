import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { StyledToolBar } from './StyledHeader';
import { goToHome, goToLogin } from '../../routes/codinator';
import { useHistory } from 'react-router-dom';



const Header = () => {
    const history = useHistory()
  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToHome(history)} color="inherit" >LabEdit</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
        </StyledToolBar>
      </AppBar>

  );
} 

export default Header