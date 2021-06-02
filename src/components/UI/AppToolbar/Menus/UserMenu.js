import React from 'react';
import {useDispatch} from 'react-redux';
import { Button, Fade, Grid, Menu, MenuItem} from '@material-ui/core';
import {logoutUser} from '../../../../store/actions/usersActions';

const UserMenu = ({user}) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
  };  

  return(
    <Grid container direction='row' alignItems='center'>      
      <Button aria-controls="fade-menu" 
              aria-haspopup="true" 
              onClick={handleClick} 
              color='inherit'>
        Hello, {user.username}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem onClick={logoutHandler} >Logout</MenuItem>
      </Menu>
    </Grid>
  );
};

export default UserMenu;

