import axios from 'axios';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {

  //you can return or not return anything from the inner async function. Thunk doesn't care. 
  // about async (dispatch, getState): no need to pass in 2nd argument getState here because we don't need to use it

    const response = await jsonPlaceholder.get('/posts');
    //with thunk middleware, you don't need to return an object action anymore; you don't even need to return anything from the inner function. 
    dispatch({type: 'FETCH_POSTS', payload: response}); //dispatch action object manually when we want

  };

  //You can still return actions normally elsewhere. Thunk just gives you the ability to return a function instead of an action/object
  
  // return{
  //   type: 'FETCH_POSTS',
  //   payload: response
  // };
