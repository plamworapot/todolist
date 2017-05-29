import className from 'classname'
import Link from 'next/link'

export default (props) => (
  <li className='todo-item-warpper'>
    <div className={className('todo-item', {
      'complete': props.complete
    })}>
      <style jsx>{`
        .todo-item.complete .todo-text {
          text-decoration: line-through;
        }
        .todo-text {
          color: blue;
          cursor: pointer;
          text-decoration: underline;
        }
        .todo-text:hover{
          color:#c40000;
        }
        .todo-desc {
          padding-left:10px;
          color: #CCC;
          font-size: 0.8em;
          padding-right:10px;
        }
      `}</style>
      <input type='checkbox' onChange={props.onChecked} checked={props.selected} />
      <Link prefetch href={`/todolist/edit?id=${props.id}`}>
        <span>
          <span className='todo-text'>{props.text}</span>
          <span className='todo-desc'>{props.desc}</span>
        </span>
      </Link>
      <button onClick={props.onClickComplete} >{props.complete ? 'Uncomplete' : 'Complete'}</button>
      <button onClick={props.onClickDelete} >Remove</button>
    </div>
  </li>
)
