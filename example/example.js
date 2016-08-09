import Player from '../lib/Player' // 'react-soundcloud-player'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  render () {
    return (
      <div>
        <Player audio_id='193179003' title='Easyfun - Fanta' />
      </div>
    )
  }
}

ReactDOM.render( <TestComponent />, document.getElementById('root') )
