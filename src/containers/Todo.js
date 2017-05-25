import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from './../store'

class Todo extends Component {
  add = () => {
    // this.props.addCount()
  }

  render () {
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
      `}</style>
        <h1>Hi</h1>
      </div>
    )
  }
}

// const mapStateToProps = ({ count }) => ({ count })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // addCount: bindActionCreators(addCount, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Todo)
export default connect()(Todo)