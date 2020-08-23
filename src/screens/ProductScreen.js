import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import ProductSlider from '../components/ProductSlider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Divider , Typography, Grid , Container, Button} from '@material-ui/core'
import { detailsProduct } from '../actions/productActions';
import BreadCrumbs from '../components/BreadCrumbs';
import CircularProgress from '@material-ui/core/CircularProgress';
import Variants from '../components/Variants';
import Reviews from '../components/Reviews';

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
  },

  reviewsTitle: {
    textTransform: 'uppercase',
    fontWeight: '600',
    marginTop: '1rem',
    marginBottom: '-5px',  
    textAlign: 'center',
    fontSize: '1.9rem'
  },
  divider: {
    width: '60%',
    height: '4px',
    margin:' 0 auto',
    backgroundColor: '#ff5000'
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

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
  }
  
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
      <BreadCrumbs links={links} productId={product.id} productName={product.name} /> 
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={5}>
            <ProductSlider images={product.images} rating={product.rating} numReviews={product.numReviews}/>
          </Grid>
          <Grid item xs={12} md={6} lg={7}>
            <div className={classes.detailsInfo}>
              <h1>{product.name}</h1>
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
                <div>
                  Cantidad:  
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
                <br/>
                {
                  product.countInStock > 0 &&
                  (<div>
                    <Button
                      onClick={handleAddToCart}
                      variant="contained" color="secondary">
                      Agregar al carrito
                    </Button>
                  </div>)
                }
              </div>
            </div>
          </Grid> 
        </Grid>
        <Grid container>
          <Variants variants={product.variants} />
        </Grid>
        <Grid container direction="column">
            <Typography className={classes.reviewsTitle}>
              Opiniones del producto
            </Typography>
            <div className={classes.divider}></div>
            <Reviews reviews={product.reviews} />
        </Grid>
      </Container>
    }
    </React.Fragment> 
  
}
 
export default ProductScreen;