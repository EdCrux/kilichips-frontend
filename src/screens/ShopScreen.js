import React, { useState, useEffect } from 'react';
import BreadCrumbs from '../components/BreadCrumbs';
import Container from '@material-ui/core/Container';
import { Grid, Divider } from '@material-ui/core';
import {makeStyles } from '@material-ui/core';
import {listProducts} from '../actions/productActions';
import {useSelector, useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
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
    margin: '1.6rem 0 0 0'

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
    textAlign: 'center',
    margin: '1rem 0 0 0'
  }
}))


const Store = (props) => {

  const category  = props.match.params.category ? props.match.params.category : '';
  const [links, setLinks] = useState(['home', 'categories']);
  const productList = useSelector(state => state.productList);
  const {products, loading, error } = productList;
  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch(listProducts(category))
  },[category])
  
  const classes = useStyles();
  const categories = products.map(x => x.category.toLowerCase());
  const uniqueCategories = ['camote', 'betabel' , 'zanahoria' , 'jicama']
  
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
        <Grid item xs={12} lg={3}>
          <h2 className={classes.categoriesTitle}>Categorias</h2>
          <Divider></Divider>
            {uniqueCategories.map((category, i) => (
              <React.Fragment>
                  <CheckboxList value={i} productCategory={category} />
              </React.Fragment>
            ))}
        </Grid>
        <Grid item xs={12} lg={9}>
          { category ?
            <h1 className={classes.categoryTitle}>{capitalize(category)}</h1> :  <h1 className={classes.categoryTitle}> Productos</h1>}
          <Divider ></Divider> 
          <div className={classes.root}>
              {products.map((product) => (
                <ProductCard product={product} />
              ))}
          </div>
        </Grid>
      </Grid>
    </Container>}     
</React.Fragment>
}
 
export default Store;