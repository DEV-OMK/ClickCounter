// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  countClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="title">
          The Button has been clicked <span className="count">{count}</span>{' '}
          times
        </h1>
        <p className="caption">Click the button to increase the count!</p>
        <button onClick={this.countClick} className="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
