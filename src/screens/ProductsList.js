import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import {listProducts} from '../actions/productActions';

import Loader from '../components/Loader';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
      
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node, 
  index: PropTypes.any.isRequired, 
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const CategoryTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span' :{
      maxWidth: 40,
      width: '100%',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const CategoryTab = withStyles((theme) => ({
  root: {
    marginBottom: '0.5rem', 
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus' : {
      borderRadius: '36px',
      color: '#fff',
      backgroundColor: '#47BE0BC9',
      opacity: 1,
    }
  }
}))((props) => <Tab disableRippie {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
    width: '100%',
  },
  tabsContainer: {
    borderBottom: '0.5px solid #eeeeee',
    width: '90%',
    margin: '1.5rem auto 0 auto',
    display: 'flex',
    justifyContent: 'center'
  },
  productsContainer: {
    display:'flex',
    justifyContent: 'center',
    flexWrap: 'wrap', 
  },
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
    backgroundColor: '#ff5000'
  } 
}))

const ProductsList = () => {

  const productList = useSelector(state => state.productList);
  const {products, loading, error } = productList;
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  
  useEffect(()=>{
    dispatch(listProducts())
  },[])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return <React.Fragment>
    { loading ? <Loader /> :
      error ? (<div>{error}</div>) :
    <div className={classes.root}>
      <Typography className={classes.title}>
        Productos
      </Typography>
      <div className={classes.divider}></div>
      <div className={classes.tabsContainer}>
        <CategoryTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="products"
        >
          <CategoryTab label="Zanahoria" {...a11yProps(0)} />
          <CategoryTab label="Jicama"    {...a11yProps(1)} />
          <CategoryTab label="Camote"   {...a11yProps(2)} />
        </CategoryTabs>
      </div>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <div className={classes.productsContainer}>
            {products.filter(product => product.category.includes('zanahoria')).map(filteredProduct => (
                <ProductCard product={filteredProduct} />
              ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={classes.productsContainer}>
          {products.filter(product => product.category.includes('jicama')).map(filteredProduct => (
                <ProductCard product={filteredProduct} />
              ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <div className={classes.productsContainer}>
        {products.filter(product => product.category.includes('camote')).map(filteredProduct => (
                <ProductCard product={filteredProduct} />
              ))}
        </div>
        </TabPanel>
        </SwipeableViews>
    </div>
    }

  </React.Fragment> 
}

export default ProductsList;