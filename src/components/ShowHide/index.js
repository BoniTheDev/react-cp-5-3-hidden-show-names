// Write your code here

import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onClickOnFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onClickOnLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state

    const firstName = isFirstName ? (
      <div className="first-last-name-card">
        <p>Joe</p>
      </div>
    ) : null

    const lastName = isLastName ? (
      <div className="first-last-name-card">
        <p>Jonas</p>
      </div>
    ) : null

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="each-card">
            <button
              type="button"
              className="button"
              onClick={this.onClickOnFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName}
          </div>
          <div className="each-card">
            <button
              type="button"
              className="button"
              onClick={this.onClickOnLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
