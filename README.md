# react-soundcloud-player

[![npm version](https://badge.fury.io/js/react-soundcloud-player.svg)](https://badge.fury.io/js/react-soundcloud-player)

![](https://raw.githubusercontent.com/StevenIseki/react-soundcloud-player/master/example/screenshot.png)

react-soundcloud-player is a simple SoundCloud player.

## Installation

`npm install react-soundcloud-player --save`

## Usage

```javascript
import Player from 'react-soundcloud-player'
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
```

## Styles

react-soundcloud-player can be used with your own custom styles. A minimal [Player.css](https://github.com/StevenIseki/react-soundcloud-player/blob/master/example/public/Player.css) style sheet is included as a guide.

## Development

    npm install
    npm run build
    npm test
    npm start

## License

[MIT](http://isekivacenz.mit-license.org/)
