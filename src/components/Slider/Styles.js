import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  frame: {
    width: '100%',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    '@media (max-width:767px)' : {
      height: '70vh'
    },
    zIndex: '-500',
    background: 'linear-gradient(to right, #f12711, #f5af19)',
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    height: '50%',
    filter: 'brightness(0.60)'
    //clipPath: 'circle(64.2% at 68% -1%)'
  },
}));