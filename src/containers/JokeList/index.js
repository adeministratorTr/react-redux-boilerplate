import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

import { fetchJokes } from 'actions/joke';

class JokeList extends Component {
  componentDidMount() {
   this.props.fetchJokes(10);
  }

  render() {
    const { isLoading, jokes } = this.props;
    console.log('container/jokes:', jokes);
    return(
      <Fragment>
        {isLoading && <p> Loading...</p> }
        {
          jokes &&
          jokes.map(item =>
            <p key={item.id}>{item.joke}</p>
          )
        }
      </Fragment>
    )
  }
}

export default connect(
  (state) => ({
    jokes: state.jokes.jokeList,
    isLoading: state.jokes.isLoading
  }),
  {
    fetchJokes
  }
)(JokeList);
