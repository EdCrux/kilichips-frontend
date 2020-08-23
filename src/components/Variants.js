import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}))

const Variants = ({variants}) => {
  const classes = useStyles();
  return <React.Fragment>
    <div className={classes.root}>
      <h2>Acerca del producto</h2>
      {
        variants.map((variant)=>{
          return <div>
            <span><b>{variant.name}</b></span>{'  '}
            <span>{variant.description}</span><br/>
          </div> 
        })
      }
    </div> 
  </React.Fragment>;
}
 
export default Variants;