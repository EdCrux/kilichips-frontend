import axios from 'axios'
import { invertMapKeysAndValue } from './util'; 

const authHeadersKeys = [
  'access-token',
  'token-type',
  'client',
  'expiry',
  'uid'
]



export const setAuthHeaders = (headers) => {
  authHeadersKeys.forEach( (key) => {
    axios.defaults.headers.common[key] = headers[key]
  })
}

export const persistAuthHeadersInDeviceStorage = (Storage, headers) => {
  authHeadersKeys.forEach((key) => {
    Storage.setItem(key, headers[key])
  })
}

export const deleteAuthHeaders = () => {
  authHeadersKeys.forEach((key) => {
    delete axios.defaults.headers.common[key]
  })
}

export const deleteAuthHeadersFromDeviceStorage = async (Storage) => {
  authHeadersKeys.forEach((key) => {
    Storage.removeItem(key)
  })
}

export const getUserAttributesFromResponse = (userAttributes, response) => {
  const invertedUserAttributes = invertMapKeysAndValue(userAttributes)
  const userAttributesBackendKeys = {}
  const userAttributesToReturn = {}

  Object.keys(response.data.data).forEach((key) => {
    if(userAttributesBackendKeys.indexOf(key) !== -1) {
      userAttributesToReturn[invertedUserAttributes[key]] = response.data.data[key]
    }
  })

  return userAttributesToReturn
}

