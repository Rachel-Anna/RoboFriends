import { CHANGE_SEARCH_FIELD, 
         REQUEST_ROBOTS_FAILED, 
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCESS } from './constants.js'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text 
}) //brackets avoid use of return statement

export const requestRobots = ()=> (dispatch)=> {
  dispatch({type: REQUEST_ROBOTS_PENDING})
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  .then(data => dispatch({type: REQUEST_ROBOTS_SUCESS, payload: data}))
  .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
}