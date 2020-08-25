import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(()=> ({
  root: {
    minHeight: '90vh'
  },
  container: {
    padding: '1rem'
  },
  signinButton: {
    backgroundColor: '#6ECB3E',
    width: '100%',
    color: 'white',
    '&:hover' :{
      backgroundColor: '#4d8e2b'
    }
  },
  title:{
    textAlign: 'center',
    marginTop: '2rem'
  },
  resetLink: {
    textDecoration: 'none'
  }
}))
