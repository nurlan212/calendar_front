import React from 'react';
import { PersonAdd, ExitToApp} from '@material-ui/icons';
import { IconButton, Tooltip} from '@material-ui/core';
import { Link } from 'react-router-dom';

const AnonimousMenu = () => {
  return(
    <>
      <Tooltip title='Log Up'>
        <IconButton color='inherit' component={Link} to='/register'>
          <PersonAdd />
        </IconButton>
      </Tooltip>
      <Tooltip title='Log In'>
        <IconButton color='inherit' component={Link} to='/login'>
          <ExitToApp/>
        </IconButton>
      </Tooltip>  
    </>
  );
};

export default AnonimousMenu;