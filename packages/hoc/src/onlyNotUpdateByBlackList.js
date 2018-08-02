import React, { Component } from 'react'
import getDisplayName from './helpers/getDisplayName'
import shallowEqualIgnoreBlackList from './helpers/shallowEqualIgnoreBlackList'

const onlyNotUpdateByBlackList = (blackList) => (BaseComponent) => {
  const component = class extends Component {
    shouldComponentUpdate(nextProps) {
      return !shallowEqualIgnoreBlackList(this.props, nextProps, blackList)
    }

    render() {
      return (
        <BaseComponent { ...this.props } />
      )
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    component.displayName = `onlyNotUpdateByBlackList(${getDisplayName(BaseComponent)})`
  }

  return component
}

export default onlyNotUpdateByBlackList
