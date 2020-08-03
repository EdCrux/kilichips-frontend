import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      marginLeft: theme.spacing(2),
    },
  },

  registration: {
    alignSelf: 'end'
  }
}));

const Account = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}> 
    <ButtonGroup variant="text" color="secondary" aria-label="text primary button group" className={classes.registration}>
        <Button
          aria-controls="simple-menu" aria-haspopup="true" 
          onClick={handleClick}>
              Tu cuenta
        </Button>
        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Tu perfil</MenuItem>
        <MenuItem onClick={handleClose}>Tus direcciones</MenuItem>
        <MenuItem onClick={handleClose}>Tus pedidos</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>

      </Menu>

      <Button edge="end">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </Button>
    </ButtonGroup>
    </div>
   );
}
 
export default Account;