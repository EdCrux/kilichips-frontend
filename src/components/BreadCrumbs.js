import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
  root: {
    padding: '2rem 0 2rem 0.7rem',
    color: '#ff5000',
    fontWeigth: '900',
    textDecoration: 'none'
  }
}))

export default function BreadCrumbs({links , productId}) {
  const classes = useStyles();
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root} >
      {links.map((link)=> {
        if(link === 'home') {
          link = '/'
        } else if (link === 'tienda') {
          link = '/shop'
        } else {
          link = `/product/${productId}`
        }
        return <Link className={classes.root} to={link} >
          {link}
        </Link>
      }
      )}
    </Breadcrumbs>
  );
}
