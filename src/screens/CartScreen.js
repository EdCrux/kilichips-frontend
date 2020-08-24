import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import {Container, Divider, Grid, Hidden,Button, TextField } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {Link} from 'react-router-dom';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const useStyles = makeStyles(()=> ({
  cartEmpty: {
    minHeight: '80vh'
  },
  cartTitle: {
    marginBottom: 0
  },
  tableHeaders: {
    backgroundColor: '#D9D9DB'
  },
  header: {
    margin: 0 
  },
  cartListContainer: {
    margin: '1rem auto'
  },
  subtotalContainer: {
    backgroundColor: '#6ECB3E',
    color: 'white', 
    width: '100%',
    textAlign: 'right',
    paddingRight: '2rem'
  },
  imgReponsive:{
    maxWidth: 100,
    borderRadius: '5px'
  },
  cardListQty: {
    width: 55
  },
  itemLink : {
    textDecoration: 'none',
    color: 'black'
  }
}));



const CartScreen = (props) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  console.log(productId)
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId))
  }

  const handleRedirectToShop = () => {
    props.history.push("/shop");
  }

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }
  useEffect(() => {
    if(productId) {
      dispatch(addToCart(productId, qty))
    }
  },[])

  const classes = useStyles();
  return <Fragment>
    {
      cartItems.length === 0 ? 
      <Container maxWidth="md" className={classes.cartEmpty}>
        <h1>Tu carrito está vacío</h1>
      </Container>
      :
      <Container maxWidth="md">
        <div>
          <h1 className={classes.cartTitle}>Carrito de compras</h1>
          <Divider />
          <div>
            <Grid
              className={classes.tableHeaders}
              container
              justify="space-around" 
              xs={12}>
              <Hidden only = {['xs', 'md']}>
                <Grid className={classes.tableHeaders} item xs={6}>
                  <h3 className={classes.header}>PRODUCTO</h3>
                </Grid>
                <Grid className={classes.tableHeaders} item>
                  <h3 className={classes.header}>PRECIO</h3>
                </Grid>
                <Grid className={classes.tableHeaders} item>
                  <h3 className={classes.header}>CANTIDAD</h3>
                </Grid>
                <Grid  className={classes.tableHeaders}item>
                  <h3 className={classes.header}>TOTAL</h3>
                </Grid>
              </Hidden>
            </Grid>
            {
                cartItems.map( (item, i) => (
                  <Grid
                  className={classes.cartListContainer}
                  container
                  justify="space-around" 
                  xs={12}>
                  <Grid item >
                    <Link to={`/products/${item.product_id}`}>
                      <img className={classes.imgReponsive} src={`http://localhost:3000/${item.image}`}  alt="product" />
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link to={`/products/${item.product_id}`} className={classes.itemLink}>
                      {item.name}
                    </Link>
                  </Grid>
                  <Grid item>
                    $ {item.price}
                  </Grid>
                  <Grid item>
                    <TextField
                      className={classes.cardListQty}
                      color="secondary" 
                      id="standard-number"
                      variant="outlined"
                      label="Cantidad"
                      type="number"
                      value={item.qty}
                      step="any" 
                      min="1" 
                      max={item.countInStock}
                      onChange={(e) => dispatch(addToCart(item.product_id, e.target.value))}
                      InputLabelProps={{
                        shrink: true,
                        }}
                    />  
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={()=> removeFromCartHandler(item.product_id)}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </Grid>
                </Grid>))
              }

<Grid container >
                <Grid item className={classes.subtotalContainer}>
                  <h3 className={classes.header}> Subtotal :
                  $ {cartItems.reduce(((a,c) => a + c.price* c.qty), 0)}
                  </h3>
                  </Grid>
              </Grid>
              <Grid
                justify="flex-end"
                alignItems="center"
                container>
                <AirportShuttleIcon / > El costo de envío se calcula con tu dirección
              </Grid>
              <Grid
                justify="space-between" 
                container>
                <Button onClick={handleRedirectToShop}>
                  Ver productos
                </Button>
                <Button
                  variant="contained" color="secondary"
                  onClick={checkoutHandler}>
                  Continuar con la compra
                </Button>
              </Grid>
          </div>
        </div>
      </Container>
    }
    </Fragment>
}
 
export default CartScreen;