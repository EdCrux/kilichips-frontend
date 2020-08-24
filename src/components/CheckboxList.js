import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  categoriesLinkBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'black'
  }
}));

const CheckboxList = ({value, productCategory}) => {
  const classes = useStyles();

  const labelId = `checkbox-list-label-${value}`;
  return (
    <List className={classes.root}>      
      <ListItem key={value} role={undefined} dense button>
        <Link to={`/category/${productCategory}`} className={classes.categoriesLinkBox}>
        <ListItemText id={labelId} primary={productCategory} />
        </Link>
      </ListItem>
    </List>
  );
}

export default CheckboxList