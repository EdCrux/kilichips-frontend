import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles(()=> ({
  facebook: {
    backgroundColor: '#3479EA',
    color: 'white',
    '&:hover' : {
      backgroundColor: '#2454a3'
    }  
  }
}))
const OauthButton = () => {
  const classes = useStyles();
  return ( 
    <Button 
      fullWidth 
      variant="contained" 
      className={classes.facebook}
      size="large"
      startIcon={<FacebookIcon />}
    >
      Facebook
    </Button>
   );
}
 
export default OauthButton;