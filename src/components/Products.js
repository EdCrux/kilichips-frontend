import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 30,
    margin: '0 auto' 
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(1),
  },

}));

const Products = ({filteredProducts, handleAddToCart}) => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} >
        <Grid container justify="center" spacing={spacing} >
          {
            filteredProducts.map((product) => (
            <Grid key={product.id} item>
              <Product 
                sku={product.sku}
                title={product.title}
                description={product.description}
                price={product.price}
                handleAddToCart={handleAddToCart}
                />
            </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Grid>

  );
}
export default Products;