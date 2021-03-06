import React from 'react'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from './../src/store'
import Todo from './../src/containers/Todo'
import { loadPrevStore } from './../src/actions'

class Index extends React.Component {
  static getInitialProps ({ isServer }) {
    return { isServer }
  }

  componentDidMount () {
    if (window.localStorage) {
      const prevState = window.localStorage.getItem('todoState')
      if (prevState) {
        this.props.loadPrevStore(JSON.parse(prevState))
      }
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <Todo />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPrevStore: bindActionCreators(loadPrevStore, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Index)
