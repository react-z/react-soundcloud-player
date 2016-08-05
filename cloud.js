class AudioPlayer extends React.Component {
  play () {
    let audioElement = this.refs.audio.getDOMNode()
    audioElement.play();
  }

  pause () {
    let audioElement = this.refs.audio.getDOMNode()
    audioElement.pause();
  }

  render () {
    const { audio_id, audio_secret_token, client_id, title } = this.props
    let streamUrl = `https://api.soundcloud.com/tracks/${audio_id}/stream?client_id=${client_id}&secret_token=${audio_secret_token}`
    let bar_progress = {
      transform: "translateX(-97.79%)"
    }

    return (
    	<div className='audio-player'>

        <audio id='audio' ref='audio' src={streamUrl}></audio>

        <div className="player-track active">
          <div className="control">
            <i className='material-icons audio-player__icon' onClick={this.play.bind(this)}>play_circle_outline</i>
          </div>
          <div className="player-display">
            <div>
              <h4>{title}</h4>
              <span className="soundcloud">
                <span>Via&nbsp;</span>
                <a href="" rel="nofollow" target="_blank">SoundCloud</a></span>
            </div>
            <div className="progress-bar">
              <span className="position numeric">0:05</span>
              <span className="bar">
                <span className="container-bar">
                  <span className="bar-progress" style={bar_progress}></span>
                </span>
              </span>
              <span className="duration numeric">3:48</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
