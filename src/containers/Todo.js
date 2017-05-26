import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadPrevStore } from './../actions'
import TodoList from './TodoList'

class Todo extends Component {
  componentDidMount () {
    if (window && window.localStorage) {
      const prevState = window.localStorage.getItem('todoState')
      if (prevState) {
        this.props.loadPrevStore(JSON.parse(prevState))
      }
    }
  }
  add = () => {
    // this.props.addCount()
  }

  render () {
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <TodoList />
      </div>
    )
  }
}

// const mapStateToProps = ({  }) => ({ count })

const mapDispatchToProps = (dispatch) => {
  return {
    loadPrevStore: bindActionCreators(loadPrevStore, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Todo)
// export default connect()(Todo)
