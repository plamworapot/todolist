import TodoInput from './../containers/TodoInput'
import TodoItem from './TodoItem'
import { FILTER_ALL, FILTER_COMPLETE, FILTER_NON_COMPLETE } from './../constants/ActionTypes'
export default (props) => (
  <div>
    <TodoInput />
    {/* todo filter */}
    <div>
      <button onClick={(e) => {
        e.preventDefault()
        props.filterTodo(FILTER_ALL)
      }}>FILTER_ALL</button>
      <button onClick={(e) => {
        e.preventDefault()
        props.filterTodo(FILTER_COMPLETE)
      }}>FILTER_COMPLETE</button>
      <button onClick={(e) => {
        e.preventDefault()
        props.filterTodo(FILTER_NON_COMPLETE)
      }}>FILTER_NON_COMPLETE</button>
    </div>
    {props.todos.length > 0
      ? <ul>
        {props.todos.map((todo, key) => {
          if (props.filter === FILTER_COMPLETE && !todo.complete){
            return null
          } else if (props.filter === FILTER_NON_COMPLETE && todo.complete){
            return null
          } else {
            return (
              <TodoItem key={key} {...todo} onClickComplete={(e) => {
                e.preventDefault()
                props.todoCompleteToggle(todo.id)
              }} onClickDelete={(e) => {
                e.preventDefault()
                props.deleteTodo(todo.id)
              }} />
            )
          }
        })}
      </ul>
      : <div>Empty</div>
    }
  </div>
)
