import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { config } from './config'
import FormatTime from './FormatTime'

/**
 * SoundCloud Player
 * A simple SoundCloud player.
**/
export default class Player extends Component {

  static get propTypes () {
    return {
      audio_id: PropTypes.string.isRequired,
      audio_secret_token: PropTypes.string,
      title: PropTypes.string,
      link: PropTypes.string
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      audioPlayer: null,
      percent_remains: 100,
      duration: '0:00',
      current_time: '0:00',
      client_id: config.client_id
    }
  }

  componentDidMount() {
    this.setState({ audioPlayer: ReactDOM.findDOMNode(this.refs.audio) }, () => {
      this.state.audioPlayer.ontimeupdate = () => { this.timeUpdated() };
    })
  }

  togglePlay () {
    const { playing, audioPlayer } = this.state;
    this.setState({ playing: !playing }, () => {
      this.state.playing ? audioPlayer.play() : audioPlayer.pause()
    })
  }

  timeUpdated() {
    const { playing, audioPlayer } = this.state;
    if(audioPlayer == undefined){ return }
    let percent = (audioPlayer.currentTime / audioPlayer.duration) * 100
    this.setState({ current_time: FormatTime(audioPlayer.currentTime * 10) })
    this.setState({ duration: FormatTime(audioPlayer.duration * 10) })
    this.setState({ percent_remains: 100 - percent})
  }

  render () {
    const { audio_id, audio_secret_token, title, link } = this.props
    const { playing, audioPlayer, percent_remains, duration, current_time, client_id } = this.state
    let streamUrl = `https://api.soundcloud.com/tracks/${audio_id}/stream?client_id=${client_id}&secret_token=${audio_secret_token}`
    let iconClass = playing ? 'player__control__icon--pause' : 'player__control__icon--play'
    iconClass += ' player__control__icon'
    let percent = { transform: `translateX(-${percent_remains.toString()}%)` }

    return (
    	<div className='player player__track--active'>

        <audio id='audio' ref='audio' src={streamUrl}></audio>

        <div className="player__control" onClick={this.togglePlay.bind(this)}>
          <svg className={iconClass} x="0px" y="0px" viewBox="0 0 40 40" data-reactid=".23fudc7q4g0.1.5:0.1.0.$18471/=1$18471.0.1.0.0.2.0.0.1.0.0"><path class="button-circle" d="M20,1c10.5,0,19,8.5,19,19s-8.5,19-19,19S1,30.5,1,20S9.5,1,20,1 M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0L20,0z" data-reactid=".23fudc7q4g0.1.5:0.1.0.$18471/=1$18471.0.1.0.0.2.0.0.1.0.0.0"></path><g class="play-icon icon" data-reactid=".23fudc7q4g0.1.5:0.1.0.$18471/=1$18471.0.1.0.0.2.0.0.1.0.0.1"><path d="M16.9,12.4c-0.2-0.1-0.5-0.2-0.8,0c-0.2,0.1-0.4,0.4-0.4,0.7v14c0,0.3,0.1,0.5,0.4,0.7c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1l11-7c0.2-0.1,0.3-0.4,0.3-0.6s-0.1-0.5-0.3-0.6L16.9,12.4z" data-reactid=".23fudc7q4g0.1.5:0.1.0.$18471/=1$18471.0.1.0.0.2.0.0.1.0.0.1.0"></path></g></svg>
        </div>
        <div className="player__display">
          <div>
            <h4>{title}</h4>
            <span className="player__soundcloud">
              <span>Via&nbsp;</span>
              <a href="" rel="nofollow" target="_blank">SoundCloud</a></span>
          </div>
          <div className="player__progress">
            <span className="player__progress__time">{current_time}</span>
            <span className="player__progress__bar">
              <span className="player__progress__bar--container">
                <span className="player__progress__bar--percent" style={percent}></span>
              </span>
            </span>
            <span className="player__progress__time">{duration}</span>
          </div>
        </div>
      </div>
    )

  }
}
