import React from 'react';
import App from './component/App';

import './App.css';
import { connect } from 'react-dom'


// mapStateToProps
const a = (state) => {
  return {
    commentList: state
  }
}
// mapDispatchToProps
const b = (dispatch) => {
  return {
    addComment: (userName, content) => {
      dispatch({
        type: 'ADD_COMMENT',
        userName,
        content
      })
    }
  }
}
export default connect(a, b)(App);
