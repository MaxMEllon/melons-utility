import React, { Component } from 'react'
import getDisplayName from './helpers/getDisplayName'
import shallowEqualIgnoreFunction from './helpers/shallowEqualIgnoreFunction'

const pureIgnoreFunctions = BaseComponent => {
  const component = class extends Component {
    shouldComponentUpdate(nextProps) {
      return !shallowEqualIgnoreFunction(this.props, nextProps)
    }

    render() {
      return (
        <BaseComponent { ...this.props } />
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    component.displayName = `pureIgnoreFunctions(${getDisplayName(BaseComponent)})`
  }

  return component
}

export default pureIgnoreFunctions
