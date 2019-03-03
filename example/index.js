import Player from '../lib/Player' // 'react-soundcloud-player'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render() {
    return (
      <div>
        <Player
          client_id="c5a171200f3a0a73a523bba14a1e0a29"
          audio_id="193179003"
          title="Easyfun - Fanta"
        />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
