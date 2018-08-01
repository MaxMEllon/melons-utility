import React, { Component } from 'react'
import assert from 'assert'
import { mount } from 'enzyme'

import pureIgnoreFunctions from '../pureIgnoreFunctions'

const Item = pureIgnoreFunctions(({ onClick, text }) => (
  <div onClick={onClick}>{text}</div>
))

test('expected rerender when changed a text', () => {
  const onClick = jest.fn()
  Item.prototype.componentDidUpdate = jest.fn()
  const wrapper = mount(
    <Item
      text="expected rerender when changed props"
      onClick={onClick}
    />
  )
  wrapper.setProps({ test: 'changed' })
  assert.strictEqual(Item.prototype.componentDidUpdate.mock.calls.length, 1)
})

test('unexpected rerender when changed a onClick', () => {
  const onClick = jest.fn()
  Item.prototype.componentDidUpdate = jest.fn()
  const wrapper = mount(
    <Item
      text="expected rerender when changed props"
      onClick={onClick}
    />
  )
  wrapper.setProps({ onClick: () => {} })
  assert.strictEqual(Item.prototype.componentDidUpdate.mock.calls.length, 0)
})
