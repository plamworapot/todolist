import Router from 'next/router'
import classnames from 'classnames'

export default (props) => {
  const warpperClass = classnames('header-warpper', props.page)
  return (
    <div className={warpperClass}>
      <style jsx>{`
      .header-warpper {
        width:100%;
        background:#ccc;
        position: relative;
      }
      .header{
        width:100%;
        position:absolute;
        display:inline-block;
        text-align:center;
          z-index:0;
      }
      .header-warpper.index .header {
        text-align:left;
        padding-left:30px;
      }
      .add-btn-warpper {
        width:100%;
        display:inline-block;
        text-align:right;
        position:relative;
        z-index:1;
      }
    `}</style>
      {props.page === 'index' ? <div className='header'>Todolist</div> : null }
      {props.page === 'add' ? <div className='header'>Todolist [Add]</div> : null }
      {props.page === 'edit' ? <div className='header'>Todolist [Edit: {props.id}]</div> : null }
      {props.page === 'index'
      ? <div className='add-btn-warpper'>
        <button className='add-btn' onClick={(e) => {
          e.preventDefault()
          props.completeSelected()
        }}>Complete Selected</button>
        <button className='add-btn' onClick={(e) => {
          e.preventDefault()
          props.uncompleteSelected()
        }}>Uncomplete Selected</button>
        <button className='add-btn' onClick={(e) => {
          e.preventDefault()
          props.removeSelected()
        }}>Remove Selected</button>
        <button className='add-btn' onClick={(e) => {
          e.preventDefault()
          Router.push('/todolist/add')
        }}>+ Add</button>
      </div>
    : <div className='add-btn-warpper'>
      <button className='add-btn' onClick={(e) => {
        e.preventDefault()
        Router.push('/todolist')
      }}>Back</button>
    </div> }
    </div>
  )
}
