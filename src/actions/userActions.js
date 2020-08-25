import axios from 'axios'
import { USER_SIGNIN_REQUEST } from '../constants/userConstants'

export const emailSignIn = (email, password, password_confirmation) => async (dispatch) => {
  dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password, password_confirmation }})
  try {
    const { data } = await axios.post('http://192.168.1.69:3000/api/v1/auth', {email, password, password_confirmation })

    

  }
  catch (error) {

  }
}