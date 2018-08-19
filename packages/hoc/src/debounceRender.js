import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import getDisplayName from './helpers/getDisplayName'

export default function debounceRender(BaseComponent, ...debounceArgs) {
  const component = class extends Component {
    constructor(props, context) {
      super(props, context)
      this.state = props
      this.shouldRender = false
    }

    UNSAFE_componentWillReceiveProps(props) {
      this.shouldRender = false
      this.updateState(props)
    }

    componentWillUnmount() {
      this.updateState.cancel()
    }

    updateState = debounce(props => {
      this.shouldRender = true
      this.setState(props)
    }, ...debounceArgs)

    shouldComponentUpdate() {
      return this.shouldRender
    }

    render() {
      return <BaseComponent {...this.state} />
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    component.displayName = `debounceRender(${getDisplayName(BaseComponent)})`
  }

  return component
}
