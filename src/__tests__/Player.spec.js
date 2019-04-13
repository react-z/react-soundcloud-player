/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Player from '../Player'

test('Player renders correctly and matches snapshot', () => {
  const component = renderer.create(
    <Player
      client_id="c5a171200f3a0a73a523bba14a1e0a29"
      audio_id="193179003"
      title="Easyfun - Fanta"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Player renders the correct elements and props', () => {
  const wrapper = shallow(
    <Player
      client_id="c5a171200f3a0a73a523bba14a1e0a29"
      audio_id="193179003"
      title="Easyfun - Fanta"
    />
  )
  expect(wrapper.instance().props.audio_id).toEqual('193179003')
  expect(wrapper.instance().props.client_id).toEqual('c5a171200f3a0a73a523bba14a1e0a29')
  expect(wrapper.instance().props.title).toEqual('Easyfun - Fanta')
})
