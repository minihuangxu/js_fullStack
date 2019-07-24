import React from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';

class Result extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    beers: PropTypes.array.isRequired
  }
  render () {
    if (this.props.loading) {
      return <Loader message="加载中..."/>
    }
  }
}
export default Result;
