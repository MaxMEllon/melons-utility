import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const withTooltip = (Content, selector, option = { duration: 200 }) => (Button) => class extends React.Componnet {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
    this.onHover = this.onHover.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  craetePotal() {
    return ReactDOM.craetePotal(
      <div>
        <Content {...this.props} {...this.state} />
      </div>,
      document.querySelector(selector),
    )
  }

  onHover() {
    this.setState({ visible: true })
  }

  onBlur() {
    this.setState({ visible: false })
  }

  render() {
    const Potal = this.createPotal()
    return (
      <>
        <div
          onMouseEnter={this.onHover}
          onMouseLeave={this.onBlur}
        >
          <Button {...this.props} {...this.state} />
        </div>
        {Potal}
      </>
    )
  }
}

export default withTooltip
