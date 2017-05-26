import React from 'react'
// import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from './../src/store'
import Todo from './../src/containers/Todo'


class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    // store.dispatch(serverRenderClock(isServer))
    // store.dispatch(addCount())
    return { isServer }
  }

  componentDidMount () {

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
    // addCount: bindActionCreators(addCount, dispatch),
    // startClock: bindActionCreators(startClock, dispatch)
  }
}

export default withRedux(initStore, null, mapDispatchToProps)(Counter)
