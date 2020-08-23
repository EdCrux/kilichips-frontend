import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Container from '@material-ui/core/Container';
import { Grid, Divider } from '@material-ui/core';
import {makeStyles } from '@material-ui/core';
import {listProducts} from '../actions/productActions';
import {useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckboxList from '../components/CheckboxList';



const useStyles = makeStyles ((theme) => ({
  root: {
    display:'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', 
  },
  categoriesTitle: {
    textTransform: 'uppercase',
    marginBottom: '0'
  },

  loaderContainer: {
    position: 'absolute',
    zIndex: '1000',
    height: '100vh',
    width:'100%',
    backgroundColor: '#11111195',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center' 
  },

  categoryTitle: {
    textAlign: 'center'
  }
}))


const Store = (props) => {

  const category  = props.match.params.category ? props.match.params.category : '';
  const [links, setLinks] = useState(['home', 'categories']);
  const productList = useSelector(state => state.productList);
  const {products, loading, error } = productList;
  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(listProducts())
  },[category])
  
  const classes = useStyles();
  const categories = products.map(x => x.category.toLowerCase());
  const uniqueCategories = [...new Set(categories)];
  
  const capitalize = s => typeof s !== 'string' ?  '' : s.charAt(0).toUpperCase() + s.slice(1);  

  return <React.Fragment>
  { loading ?
     <div className={classes.loaderContainer}>
        <CircularProgress color="secondary" /> :
     </div> :
    error ? (<div>{error}</div>) :
    <Container maxWidth="md" >
      <BreadCrumbs links={links} />
      <Grid container spacing={1}>
        <Grid item xs={12} lg={2}>
          <h2 className={classes.categoriesTitle}>Categorias</h2>
          <Divider></Divider>
            {uniqueCategories.map((category, i) => (
              <React.Fragment>
                  <CheckboxList value={i} productCategory={category} />
              </React.Fragment>
            ))}
        </Grid>
        <Grid item xs={12} lg={10}>
          { category && <h2 className={classes.categoryTitle}>{capitalize(category)}</h2>}
          <Divider></Divider> 
          <div className={classes.root}>
              {products.map((product) => (
                <Product product={product} />
              ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  }     
</React.Fragment>
}
 
export default Store;