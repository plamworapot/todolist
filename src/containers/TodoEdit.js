import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from './../components/TodoInput'
import { changeCurrentText, changeCurrentDesc, editTodo } from './../actions'

const mapStateToProps = ({ currentText, currentDesc, selected }) => ({
  currentText,
  currentDesc,
  selected,
  btnText: 'Save',
  page: 'edit',
  id: selected
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentText: bindActionCreators(changeCurrentText, dispatch),
    changeCurrentDesc: bindActionCreators(changeCurrentDesc, dispatch),
    btnAction: bindActionCreators(editTodo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
