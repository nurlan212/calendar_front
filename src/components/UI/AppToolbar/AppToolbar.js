import React from 'react';
import {AppBar, Toolbar, Typography, Grid, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import AnonimousMenu from './Menus/AnonimousMenu';
import UserMenu from './Menus/UserMenu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },  
  mainLink: {
    textDecoration: "none",
    color: "inherit",
    "&:hover": {
      color: "#ccc"
    }
  },
  title: {
    flexGrow: 1,
  },
}));

const AppToolbar = () => {
  const user = useSelector(state=>state.users.user);
  const classes = useStyles();

  return(    
    <div className="AppToolbar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.mainLink}>
              Events Calendar
            </Link>
          </Typography>
          <Grid>
            {user ?
              <UserMenu user = {user}/> :
              <AnonimousMenu />}
          </Grid>         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppToolbar;

