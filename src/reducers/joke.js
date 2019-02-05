import { types } from 'actions/joke';

const initialState = {
  jokes:[],
  isLoading: false,
  error: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case types.JOKES_START:
      return {
        ...state,
        isLoading: true
      }

    case types.JOKES_SUCCESS:
      console.log('reducers/jokes_success:', action)
      return {
        ...state,
        jokeList: action.jokes.value,
        isLoading: false,
        error: false
      }

    case types.JOKES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true
      }

    default:
      return state;
  }
}
