import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Player from '../src/Player'

test('Player component', (t) => {
  setupJsdom()
  const wrapper = mount( <Player audio_id='193179003' title='Easyfun - Fanta' /> )
  console.log(wrapper.props())
  t.pass(
    expect(wrapper.props().audio_id).toEqual('193179003')
  )
  t.pass(
    expect(wrapper.props().title).toEqual('Easyfun - Fanta')
  )
  t.pass(
    expect(wrapper.state().client_id).toEqual('c5a171200f3a0a73a523bba14a1e0a29')
  )

  t.end()
});
