import React from 'react';
import { Link } from 'react-router-dom';

//material UI
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// styles and assets
import Logo from '../../images/Logo.svg';
import { useStyles } from './StylesHeader';

// header
import {ScrollTop} from './ScrollTop';
import MobileNavbar from './MobileNavbar';
import Account from '../../components/Account';



export default function Header(props) {

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
        })}>
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
              <Link to="/">
                <Button>
                  <img src={Logo} alt="logo" className={classes.logo}/>
                </Button>
              </Link>
            </div>
          <Hidden only={['xs','sm', 'md']} >
            <div className={classes.sectionDesktop}>
            <Link to="/" className={classes.links}>
              <div>
                  <Button variant="h6" edge="start">
                    <IconButton color="secondary">
                      <HomeIcon/>
                    </IconButton>
                      Inicio
                  </Button>
              </div>
            </Link>
            <Button>
              <Link to="/shop" className={classes.links}>
                Tienda
              </Link>
            </Button>
            <Button edge="start">
              <Link to="/blog" className={classes.links}>
                Blog
              </Link>
            </Button>
            <Button>
              <Link to="/contact" className={classes.links}>
                Contacto
              </Link>
            </Button>
            <Button>
              <Link to="/salesPoints" className={classes.links}>  
                Puntos de Venta
              </Link>
            </Button>
            <Button >
              <Link to="/FAQ" className={classes.links}>
                Preguntas Frecuentes
              </Link>
            </Button>
            </div>
          </Hidden>
          <Account />
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <MobileNavbar 
        handleDrawerClose={handleDrawerClose} 
        theme={theme}
        classes={classes}
        open={open}
      />
    </div>
  );
}
