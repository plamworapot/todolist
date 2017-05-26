export default (props) => (
  <div>
    <input type='text' onChange={(e) => {
      e.preventDefault()
      props.changeCurrentText(e.target.value)
    }} value={props.currentText} />
    <textarea cols='30' rows='10' onChange={(e) => {
      e.preventDefault()
      props.changeCurrentDesc(e.target.value)
    }} value={props.currentDesc} />
    <button onClick={(e) => {
      e.preventDefault()
      props.addTodo(props.currentText, props.currentDesc)
    }}>Add</button>
  </div>
)
