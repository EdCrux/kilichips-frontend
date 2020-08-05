import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductImage from '../../images/footerImage.png';

const useStyles = makeStyles({
  root: {
    width: 320,
    maxWidth: 345,
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
  center: {
    textAlign: 'center'
  }
});

const Product = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ProductImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={classes.descriptionContainer}>
          <Typography variant="h5" component="h2">
            Precio: $1500
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Natural
          </Typography>
          </div>
          <Typography variant="h6" color="secondary" className={classes.center}>
            Paquete de 5 piezas
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.buyButton}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}


export default Product;