import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from './../components/TodoInput'
import { changeCurrentText, changeCurrentDesc, addTodo } from './../actions'

const mapStateToProps = ({ currentText, currentDesc }) => ({ currentText, currentDesc })

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentText: bindActionCreators(changeCurrentText, dispatch),
    changeCurrentDesc: bindActionCreators(changeCurrentDesc, dispatch),
    addTodo: bindActionCreators(addTodo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
