import Header from './Header'

export default (props) => (
  <div>
    <Header page={props.page} id={props.selected} />
    <style jsx>{`
      .row span{
        width:25%;
        display:inline-block;
      }
      .row {
        margin:15px;
      }
      input,textarea{
        width:50%;
      }
      .btn-warpper{
        margin: 0 auto;
        text-align:center;
      }
      .btn-warpper button{
        width:100px;
        margin:15px;
        height:25px;
      }
    `}</style>
    <div className='row'>
      <span>Title: </span>
      <input type='text' onChange={(e) => {
        e.preventDefault()
        props.changeCurrentText(e.target.value)
      }} value={props.currentText} />
    </div>
    <div className='row'>
      <span>Desception: </span>
      <textarea cols='30' rows='10' onChange={(e) => {
        e.preventDefault()
        props.changeCurrentDesc(e.target.value)
      }} value={props.currentDesc} />
    </div>
    <div className='btn-warpper'>
      <button onClick={(e) => {
        e.preventDefault()
        if (props.currentText === '') {
          window.alert('title can\'t empty')
          return false
        }
        props.btnAction(props.currentText, props.currentDesc, props.selected)
      }}>{props.btnText}</button>
    </div>
  </div>
)
