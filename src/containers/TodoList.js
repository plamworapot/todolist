import { connect } from 'react-redux'
import TodoList from './../components/TodoList'
import { bindActionCreators } from 'redux'
import { todoCompleteToggle, filterTodo, deleteTodo } from './../actions'

const mapStateToProps = ({ todos, filter }) => ({ todos, filter })

const mapDispatchToProps = (dispatch) => {
  return {
    todoCompleteToggle: bindActionCreators(todoCompleteToggle, dispatch),
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    filterTodo: bindActionCreators(filterTodo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
