import className from 'classname'
export default (props) => (
  <li className='todo-item-warpper'>
    <div className={className('todo-item', {
      'complete': props.complete
    })}>
      <style jsx>{`
        .todo-item {}
        .todo-item.complete {
          text-decoration: line-through;
        }
        .todo-desc {
          color: #CCC;
          font-size: 0.8em;
        }
      `}</style>
      <span className='todo-text'>{props.text}</span>
      <span className='todo-desc'>{props.desc}</span>
      <button onClick={props.onClickComplete} >O</button>
      <button onClick={props.onClickDelete} >X</button>
    </div>
  </li>
)
