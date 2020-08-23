import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import ProductSlider from '../components/ProductSlider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Divider , Typography, Grid , Container} from '@material-ui/core'
import { detailsProduct } from '../actions/productActions';
import BreadCrumbs from '../components/BreadCrumbs';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles(() => ({
  statusTagAvailable: {
    color: '#64A72F'
  },
  statusTagUnAvailable: {
    color: 'red'
  },
  qtyInput: {
    border: '0.5px solid #c0c0c0',
    width: 60,
    textAlign: 'center',
    fontSize: '1.3rem',
    padding: 1
  }
}))

const ProductScreen = (props) => {
  //Styles
  const classes = useStyles();
  // Product details 
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails)
  const {product, loading, error} = productDetails;
  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(detailsProduct(props.match.params.id));
  },[])
  
  const links = ['home', 'tienda', product.name ]
  
  return <React.Fragment>
    {  loading ? 
      <div className={classes.loaderContainer}>
         <CircularProgress color="secondary" /> :
      </div> : error ? (<div>{error}</div>) :
      <Container maxWidth="md" >
      <BreadCrumbs links={links} productId={product.id} /> 
        <Grid container spacing={1}>
          <Grid item xs={12} lg={5}>
            <ProductSlider images={product.images} />
          </Grid>
          <Grid item xs={12} lg={7}>
            <div className={classes.detailsInfo}>
              <h2>{product.name}</h2>
              <Divider></Divider>
              <Typography>
                {product.description}
              </Typography>
            </div>
            <div className={classes.detailsAction}>
              <div>
                <h4>PRECIO</h4>
                <h1>$ {product.price} <span>c/u</span></h1>
                <h5>Impuesto incluido. Los gastos de envío se calculan en la pantalla de pagos</h5> 
                
              </div>
              <div 
                className={product.countInStock > 0 ? classes.statusTagAvailable : classes.statusTagUnAvailable} 
                >Status: {product.countInStock > 0 ? 'Disponible' : 'No disponible' } </div>
              <div>
                <input
                  className={classes.qtyInput} 
                  value={qty}
                  type="number" 
                  step="any" 
                  placeholder="1" 
                  min="1" 
                  max={product.countInStock}
                  onChange={ (e) => {setQty(Number(e.target.value))}}
                />
              </div>
            </div>
          </Grid> 
        </Grid>
      </Container>
    }
    </React.Fragment> 
  
}
 
export default ProductScreen;