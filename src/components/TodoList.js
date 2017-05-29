import TodoItem from './TodoItem'
import Header from './Header'
import { FILTER_ALL, FILTER_COMPLETE, FILTER_NON_COMPLETE } from './../constants/ActionTypes'
export default (props) => {
  const todos = props.todos.filter((todo) => {
    if (props.filter === FILTER_COMPLETE && !todo.complete) {
      return false
    } else if (props.filter === FILTER_NON_COMPLETE && todo.complete) {
      return false
    } else {
      return true
    }
  })
  const count = todos.length
  const total = props.todos.length
  return (
    <div>
      <Header page='index' completeSelected={props.completeSelected} removeSelected={props.removeSelected} uncompleteSelected={props.uncompleteSelected} />
      <style jsx>{`
        ul{
          list-style:none;
          padding:10px;
        }  
      `}</style>
      {/* todo filter */}
      <div>
        <span>Filter :</span>
        <button onClick={(e) => {
          e.preventDefault()
          props.filterTodo(FILTER_ALL)
        }}>All</button>
        <button onClick={(e) => {
          e.preventDefault()
          props.filterTodo(FILTER_COMPLETE)
        }}>COMPLETED</button>
        <button onClick={(e) => {
          e.preventDefault()
          props.filterTodo(FILTER_NON_COMPLETE)
        }}>UNCOMPLETED</button>
      </div>
      {props.todos.length > 0
        ? <div>
          <span>Found :{count} / {total}</span>
          <ul>
            {todos.map((todo, key) => (
              <TodoItem key={key} {...todo} onClickComplete={(e) => {
                e.preventDefault()
                props.todoCompleteToggle(todo.id)
              }} onClickDelete={(e) => {
                e.preventDefault()
                props.deleteTodo(todo.id)
              }} onChecked={(e) => {
                console.log('checkedToggle')
                props.checkedToggle(todo.id)
              }} />
          ))}
          </ul>
        </div>
        : <div>Empty</div>
      }
    </div>
  )
}
