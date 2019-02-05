import api from 'helpers/api';

export const types = {
  JOKES_START: 'JOKES/FETCH_JOKES_START',
  JOKES_SUCCESS: 'JOKES/FETCH_JOKES_SUCCESS',
  JOKES_ERROR: 'JOKES/FETCH_JOKES_ERROR',
  GET_JOKE_START: 'JOKE/FETCH_SELECTED_JOKE_START',
  GET_JOKE_SUCCESS: 'JOKE/FETCH_SELECTED_JOKE_SUCCESS',
  GET_JOKE_ERROR: 'JOKE/FETCH_SELECTED_JOKE_ERROR'
}

export const fetchJokes = (limit) => dispatch => {
  dispatch({
    type: types.JOKES_START
  });
  return api.getRandomJokes(limit)
  .then((result) => {
    dispatch({
      type: types.JOKES_SUCCESS,
      jokes: result
    })
  })
  .catch(() => {
    dispatch({
      type: types.JOKES_ERROR,
    })
  })
}

export const fetchJoke = (id) => dispatch => {
  dispatch({
    type: types.GET_JOKE_START
  });
  return api.getRandomJokes(id)
  .then((result) => {
    dispatch({
      type: types.GET_JOKE_SUCCESS,
      joke: result
    })
  })
  .catch(() => {
    dispatch({
      type: types.GET_JOKE_ERROR,
    })
  })
}