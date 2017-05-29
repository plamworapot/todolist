import React from 'react'
import Error from 'next/error'
import Router from 'next/router'
import { bindActionCreators } from 'redux'
import withRedux from 'next-redux-wrapper'
import { initStore } from './../src/store'
import TodoInput from './../src/containers/TodoEdit'
import { selected, loadPrevStore } from './../src/actions'

class Edit extends React.Component {
  static getInitialProps ({ store, isServer, query }) {
    if (query.id) {
      store.dispatch(selected(query.id))
    }
    return { isServer }
  }

  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
  }

  componentDidMount () {
    if (window.localStorage) {
      const prevState = window.localStorage.getItem('todoState')
      if (prevState) {
        const jsonState = JSON.parse(prevState)
        const currentTodo = jsonState.todos.find((item) => parseInt(item.id) === parseInt(this.props.selected))
        if (currentTodo) {
          this.props.loadPrevStore({
            ...jsonState,
            currentText: currentTodo.text,
            currentDesc: currentTodo.desc
          })
          this.setState({ error: false })
        } else {
          this.setState({ error: true }, () => {
            setTimeout(() => {
              Router.replace('/')
            }, 3000)
          })
        }
      }
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return this.state.error ? <Error statusCode={404} /> : <TodoInput />
  }
}

const mapStateToProps = ({ selected }) => {
  return {
    selected
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadPrevStore: bindActionCreators(loadPrevStore, dispatch)
  }
}

export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Edit)
