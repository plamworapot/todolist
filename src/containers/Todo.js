import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPrevStore } from './../actions'
import TodoList from './TodoList'

class Todo extends Component {
  render () {
    return (
      <TodoList />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPrevStore: bindActionCreators(loadPrevStore, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Todo)
