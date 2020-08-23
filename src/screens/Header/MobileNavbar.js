import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const MobileNavbar = ({handleDrawerClose, theme, classes , open}) => {
  return (
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
      {
        ['INICIO', 'TIENDA', 'QUIENES SOMOS', 'PUNTOS DE VENTA','CONTACTO', 'PREGUNTAS FERCUENTES'].map((text, index) => (
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
  );
}

export default MobileNavbar;