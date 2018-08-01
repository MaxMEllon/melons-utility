import React, { Component } from 'react'
import is from './is'

const hasOwn = Object.prototype.hasOwnProperty

function shallowEqualIgnoreFunction(objA: any, objB: any): boolean {
  if (is(objA, objB)) return true

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) return false

  for (let i = 0; i < keysA.length; i++) {
    if (typeof objA[keysA[i]] === 'function'
        && hasOwn.call(objB, keysA[i])
        && typeof objB[keysA[i]] === 'function') continue

    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false
    }
  }

  return true
}
const pureIgnoreFunctions = BaseComponent => {
  return class extends Component {
    shouldComponentUpdate(nextProps) {
      return !shallowEqualIgnoreFunction(this.props, nextProps)
    }

    render() {
      return (
        <BaseComponent { ...this.props } />
      )
    }
  }
}

export default pureIgnoreFunctions
