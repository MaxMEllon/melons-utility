import React, { Component } from 'react'

export default function extendsDidMount(didMount) {
  return (SuperComponent) => class extends SuperComponent {
    componentDidMount() {
      if (typeof super.componentDidMount === 'function') {
        super.componentDidMount()
      }
      didMount.apply(this)
    }

    render() {
      super.render()
    }
  }
}
