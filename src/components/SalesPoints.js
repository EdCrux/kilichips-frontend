import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import carambola from '../images/carambola.png';
import farmbox from '../images/farmBox.png';
import vayko from '../images/vayko.png';

const brands = [
  {
    id: 1,
    image: carambola,
    name: 'Carambola'
  },
  {
    id: 2,
    image: farmbox,
    name: 'Farmbox'
  },
  {
    id: 3,
    image: vayko,
    name: 'Vayko'
  },

]

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    fontWeight: '600',
    marginTop: '1rem',
    marginBottom: '-5px',  
    textAlign: 'center',
    fontSize: '1.9rem'
  },
  divider: {
    width: '50%',
    height: '4px',
    margin:' 0 auto',
    backgroundColor: '#76374D'
  },
  salesPointsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 5,
    width: '90%',
    margin: '0 auto',
    padding: '2rem',
    minHeight: '30vh'
  },
  media: {
    margin: 8,
    width: '200px'
  }, 
}))

const SalesPoints = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.title}>
        Puntos de venta
      </Typography>
      <div className={classes.divider}></div>
      <div className={classes.salesPointsContainer}>
        {
          brands.map((brand) => (
            <img key={brand.id} src={brand.image} alt={brand.name} className={classes.media}/>
          ))
        }
      </div>
    </React.Fragment> 
   );
}
 
export default SalesPoints;