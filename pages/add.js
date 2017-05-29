import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from './../src/store'
import TodoAdd from './../src/containers/TodoAdd'
import { selected, loadPrevStore } from './../src/actions'

class Add extends React.Component {
  static getInitialProps ({ store, isServer, query }) {
    if (query.id) {
      store.dispatch(selected(query.id))
    }
    return { isServer }
  }

  componentDidMount () {
    if (window.localStorage) {
      const prevState = window.localStorage.getItem('todoState')
      if (prevState) {
        const jsonState = JSON.parse(prevState)
        this.props.loadPrevStore({
          ...jsonState,
          currentText: '',
          currentDesc: ''
        })
      }
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <TodoAdd />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPrevStore: bindActionCreators(loadPrevStore, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Add)
