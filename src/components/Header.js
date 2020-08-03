import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Logo from '../images/Logo.svg';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Hidden from '@material-ui/core/Hidden';
import StoreItem from './StoreItem';
import Button from '@material-ui/core/Button';
import Account from './Account'

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  logoContainer: {
    margin: '0 auto 0 0'
  },
  logo: {
    width: '100px',
    '@media (max-width:768px)':{
      width: '80px'
    }
  },
  sectionDesktop: {
    display: 'flex',
    margin: '0 auto'
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Hidden only = {['lg', 'xl']}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <div className={classes.logoContainer}>
            <Button>
              <img src={Logo} alt="logo" className={classes.logo}/>
            </Button>
          </div>
          <Hidden only={['xs','sm', 'md']} >
            <div className={classes.sectionDesktop}>
            <div>
              <Button variant="h6" edge="start">
                <IconButton color="secondary">
                  <HomeIcon/>
                </IconButton>
                  Inicio
              </Button>
            </div>
            <StoreItem />
            <Button edge="start">
              Historia
            </Button>
            <Button >
              Puntos de Venta
            </Button>
            <Button >
              Contacto
            </Button>
            <Button >
              Preguntas Frecuentes
            </Button>
            </div>
          </Hidden>
          
          <Account />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        {['INICIO', 'TIENDA', 'QUIENES SOMOS', 'PUNTOS DE VENTA','CONTACTO', 'PREGUNTAS FERCUENTES'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {
                  text === 'INICIO' ? 
                    <HomeIcon/> : null
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Tu cuenta', 'Carrito'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                { 
                  text === 'Carrito' ?
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                  </Badge>
                  : null
                }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
