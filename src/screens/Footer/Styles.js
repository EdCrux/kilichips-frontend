import { makeStyles } from '@material-ui/core/styles';
import image from './jicama-chile1@2x.png';



export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    '@media (max-width: 768px)' : {
      width: '25ch'
    },
    },
  },
  title: {
    color: '#ff5000',
    '@media (max-width: 768px)' : {
      fontSize: '1rem'
    }
  },
  container: {
    position: 'relative',
    bottom:0,
    width: '100%',
    height: '450px',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom',
    backgroundSize: '45%', 
    '@media (max-width: 768px)' : {
      backgroundSize: '45%', 
    }

  },
  containerForm: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subscribe: {
    backgroundColor: 'white'
  },
  subscribeButton: {
    fontWeight: '900',
    fontSize: '1.1rem',
    color: '#8F8B88',
    textTransform: 'capitalize',
    width: '150px',
    height:'55.8px',
    backgroundColor: 'white',
  },
  socialmedia: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  socialIcon: {
    color:'#8F8B8878',
    fontSize: '2.2rem' 
  },
  infoContainer: {
    '@media (min-width: 768px)' : {
      position: 'absolute',
      bottom: '0',
    },
    width: '60%',
    padding: '2rem'
  }
}));