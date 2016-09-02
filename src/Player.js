import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { config } from './config'
import FormatTime from './FormatTime'
import Play from './Play'
import Pause from './Pause'
import Replay from './Replay'
import Forward from './Forward'

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
      percent_progress_remains: 100,
      duration: '0:00',
      current_time: '0:00',
      client_id: config.client_id
    }
  }

  componentDidMount() {
    this.setState({ audioPlayer: ReactDOM.findDOMNode(this.refs.audio) }, () => {
      this.state.audioPlayer.ontimeupdate = () => { this.timeUpdated() };
      this.state.audioPlayer.onprogress = () => { this.progressUpdated() };
    })
  }

  togglePlay () {
    const { playing, audioPlayer } = this.state;
    this.setState({ playing: !playing, showAudioPlayer: true }, () => {
      if (audioPlayer.paused) {
        audioPlayer.play()
      }
      if (!this.state.playing) {
        if (!audioPlayer.buffered.length) return;
        audioPlayer.pause()
      }
    })
  }

  timeUpdated() {
    const { playing, audioPlayer } = this.state;
    if(audioPlayer == undefined){ return }
    let percent = (audioPlayer.currentTime / audioPlayer.duration) * 100
    this.setState({ current_time: FormatTime(audioPlayer.currentTime) })
    this.setState({ duration: FormatTime(audioPlayer.duration) })
    this.setState({ percent_remains: 100 - percent})
  }

  progressUpdated() {
    const { playing, audioPlayer } = this.state;
    if (audioPlayer == undefined) return;
    if (!audioPlayer.buffered.length) return;
    var bufferedEnd = audioPlayer.buffered.end(audioPlayer.buffered.length - 1);
    if (audioPlayer.duration > 0) {
      let percent_remains = (bufferedEnd / audioPlayer.duration) * 100
      this.setState({ percent_progress_remains: 100 - percent_remains})
    }
  }

  positionChange (e) {
    const { audioPlayer } = this.state
    let elem = ReactDOM.findDOMNode(this.refs.progress)
    let elemRect = elem.getClientRects()
    let elemLeft = elemRect[0].left
    let elemWidth = elemRect[0].width
    let clickPositionLeft = e.pageX
    let percent_remains =  100 - ( (clickPositionLeft - elemLeft) / elemWidth * 100 )
    let newTime = audioPlayer.duration - ( audioPlayer.duration * (percent_remains / 100) )
    audioPlayer.currentTime = Math.floor(newTime)
    setTimeout( () => {
      if(audioPlayer.paused) { this.togglePlay() }
    }, 1000)
  }

  forward() {
    const { audioPlayer } = this.state
    let newTime = audioPlayer.currentTime + 30
    if(newTime < audioPlayer.duration) {
      audioPlayer.currentTime = Math.floor(newTime)
    }
  }

  replay() {
    const { audioPlayer } = this.state
    let newTime = audioPlayer.currentTime - 30
    if(newTime > 0) {
      audioPlayer.currentTime = Math.floor(newTime)
    }
  }

  renderPlayerIcons() {
    const { playing } = this.state

    let skipButtons = (
      <span className='player__control__icons--skip'>
        <div className='player__control__icon' onClick={this.forward.bind(this)}>
          <Forward  />
        </div>
        <div className='player__control__icon' onClick={this.replay.bind(this)}>
          <Replay onClick={this.replay.bind(this)} />
        </div>
      </span>
    )

    if (playing) {
      return (
        <div className='player__control__icons--pause'>
          <div className='player__control__icon' onClick={this.togglePlay.bind(this)}>
            <Pause  />
          </div>
          {skipButtons}
        </div>
      );
    }

    return (
      <div className='player__control__icons--play'>
        <div className='player__control__icon' onClick={this.togglePlay.bind(this)}>
          <Play />
        </div>
        {skipButtons}
      </div>
    )
  }

  render () {
    const { audio_id, audio_secret_token, title, link } = this.props
    const { playing, audioPlayer, percent_remains, percent_progress_remains, duration, current_time, client_id } = this.state
    let streamUrl = `https://api.soundcloud.com/tracks/${audio_id}/stream?client_id=${client_id}&secret_token=${audio_secret_token}`
    let iconClass = playing ? 'player__control__icon--pause' : 'player__control__icon--play'
    iconClass += ' player__control__icon'
    let time_remains = { transform: `translateX(-${percent_remains.toString()}%)` }
    let progress_remains = { transform: `translateX(-${percent_progress_remains.toString()}%)` }

    return (
    	<div className='player player__track--active'>

        <audio id='audio' preload='none' ref='audio' src={streamUrl}></audio>

        <div className='player__control'>
          { this.renderPlayerIcons() }
        </div>

        <div className="player__display" onClick={this.positionChange.bind(this)}>
          <div>
            <h4>{title}</h4>
          </div>
          <div className="player__progress">
            <span className="player__progress__time">{current_time}</span>
            <span className="player__progress__bar">
              <span ref='progress' className="player__progress__bar--container">

                <span className="player__progress__bar--percent player__progress__bar--progress"
                      style={progress_remains}></span>
                <span className="player__progress__bar--percent" style={time_remains}></span>
              </span>
            </span>
            <span className="player__progress__time">{duration}</span>
          </div>
        </div>
      </div>
    )

  }
}
