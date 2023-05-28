import React, { useState, useEffect } from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  Link,
  Outlet
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton, LogoutButton } from './AuthComponent';
import { useInterval } from '../utils';

function NavBarComponent() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


const checkAuth = () => {
  console.log(isAuthenticated);
  // console.log(user);
  // console.log(isLoading);
}

useInterval(() => {
  checkAuth();
}, 1000 * 1);

if (isLoading) {
  console.log("Loading...");
}

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#0f1b2a' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="apps">Applications</MenuItem>
          </Menu>
          <img src='/fire.png' alt="logo" style={{ width: '48px', height: '48px' }} />
          <Typography variant="h6" style={{ marginLeft: '10px', flex: 1 }}>
            Chaos Playground
          </Typography>
          {!isLoading && !isAuthenticated && (<LoginButton />)}
          {!isLoading && isAuthenticated && (<LogoutButton />)}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default NavBarComponent;
