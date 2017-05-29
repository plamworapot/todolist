import { connect } from 'react-redux'
import TodoList from './../components/TodoList'
import { bindActionCreators } from 'redux'
import { todoCompleteToggle, filterTodo, deleteTodo, checkedToggle, completeSelected, removeSelected, uncompleteSelected } from './../actions'

const mapStateToProps = ({ todos, filter }) => ({ todos, filter })

const mapDispatchToProps = (dispatch) => {
  return {
    todoCompleteToggle: bindActionCreators(todoCompleteToggle, dispatch),
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    filterTodo: bindActionCreators(filterTodo, dispatch),
    checkedToggle: bindActionCreators(checkedToggle, dispatch),
    completeSelected: bindActionCreators(completeSelected, dispatch),
    uncompleteSelected: bindActionCreators(uncompleteSelected, dispatch),
    removeSelected: bindActionCreators(removeSelected, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
