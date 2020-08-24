import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Rating from './Rating';

const useStyles = makeStyles({
  root: {
    width: 300,
    backgroundColor: '#fafafa',
    margin: 20
  },
  media: {
    height: 300,
  },
  descriptionContainer: {
    display: 'flex',
    justifyContent:'space-around',
    alignItems: 'baseline'
  },
  buyButton: {
    margin: '0 auto',
    backgroundColor: '#64A72F',
    color: 'white'
  },

});

const ProductCard = ({product}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={`/products/${product.id}`}>
        <CardMedia
          className={classes.media}
          image={`http://localhost:3000/${product.images[0]}`}
          title="Contemplative Reptile"
          />
        </Link>
        <CardContent>
          <div className={classes.descriptionContainer}>
          <Typography variant="body2" component="h2">
            {product.name}
          </Typography>
          <Typography color="textSecondary" component="p">
            Precio: <b>${product.price}</b> 
          </Typography>
          </div>
          <Typography variant="body2" component="p" color="secondary">
            {product.description ? `${product.description.substring(0,20)} ...` : `${product.description}...`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Rating value={product.rating} text={`  ${product.numReviews} reviews`}/>
      </CardActions>
    </Card>
  );
}
export default ProductCard ;