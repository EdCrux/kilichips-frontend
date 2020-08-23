import React from 'react';
import Rating from './Rating';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(()=> ({
  root: {
    margin: '2rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  },

}))
const Reviews = ({reviews}) => {
  const classes = useStyles();

  return <React.Fragment>
    {!reviews.length && <div>No hay reseñas aún</div> }
    <div className={classes.root}>
      {
        reviews.map(review => (
          <div key={review.id} className={classes.reviewContainer}>
            <br/>
            <div><Rating value={review.rating}></Rating></div>
            <div>{review.name}</div>
            <div>{review.createdAt.substring(0,10)}</div>
            <div>{review.comment}</div>
          </div>
        ))
      }
    </div>
  </React.Fragment>
}
 
export default Reviews;