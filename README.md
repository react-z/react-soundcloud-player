# react-soundcloud-player

[![npm version](https://badge.fury.io/js/react-soundcloud-player.svg)](https://badge.fury.io/js/react-soundcloud-player)

![](https://raw.githubusercontent.com/react-z/react-soundcloud-player/master/example/screenshot.gif)

react-soundcloud-player is a simple SoundCloud player.

For a soundcloud player using the [Widget API](https://developers.soundcloud.com/docs/api/html5-widget) check out [react-soundcloud-widget-player](https://github.com/react-z/react-soundcloud-widget-player)

## Installation

`yarn add react-soundcloud-player`

## Usage

```javascript
import Player from 'react-soundcloud-player'
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
```

## Styles

Uses styled-components 💅 for the base styling.

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
