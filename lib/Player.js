'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _config = require('./config');

var _FormatTime = require('./FormatTime');

var _FormatTime2 = _interopRequireDefault(_FormatTime);

var _Play = require('./Play');

var _Play2 = _interopRequireDefault(_Play);

var _Pause = require('./Pause');

var _Pause2 = _interopRequireDefault(_Pause);

var _Replay = require('./Replay');

var _Replay2 = _interopRequireDefault(_Replay);

var _Forward = require('./Forward');

var _Forward2 = _interopRequireDefault(_Forward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * SoundCloud Player
 * A simple SoundCloud player.
**/
var Player = function (_Component) {
  _inherits(Player, _Component);

  _createClass(Player, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        audio_id: _react.PropTypes.string.isRequired,
        audio_secret_token: _react.PropTypes.string,
        title: _react.PropTypes.string,
        link: _react.PropTypes.string
      };
    }
  }]);

  function Player(props) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));

    _this.state = {
      playing: false,
      audioPlayer: null,
      percent_remains: 100,
      percent_progress_remains: 100,
      duration: '0:00',
      current_time: '0:00',
      client_id: _config.config.client_id
    };
    return _this;
  }

  _createClass(Player, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({ audioPlayer: _reactDom2.default.findDOMNode(this.refs.audio) }, function () {
        _this2.state.audioPlayer.ontimeupdate = function () {
          _this2.timeUpdated();
        };
        _this2.state.audioPlayer.onprogress = function () {
          _this2.progressUpdated();
        };
      });
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      var _this3 = this;

      var _state = this.state;
      var playing = _state.playing;
      var audioPlayer = _state.audioPlayer;

      this.setState({ playing: !playing, showAudioPlayer: true }, function () {
        if (audioPlayer.paused) {
          audioPlayer.play();
        }
        if (!_this3.state.playing) {
          if (!audioPlayer.buffered.length) return;
          audioPlayer.pause();
        }
      });
    }
  }, {
    key: 'timeUpdated',
    value: function timeUpdated() {
      var _state2 = this.state;
      var playing = _state2.playing;
      var audioPlayer = _state2.audioPlayer;

      if (audioPlayer == undefined) {
        return;
      }
      var percent = audioPlayer.currentTime / audioPlayer.duration * 100;
      this.setState({ current_time: (0, _FormatTime2.default)(audioPlayer.currentTime) });
      this.setState({ duration: (0, _FormatTime2.default)(audioPlayer.duration) });
      this.setState({ percent_remains: 100 - percent });
    }
  }, {
    key: 'progressUpdated',
    value: function progressUpdated() {
      var _state3 = this.state;
      var playing = _state3.playing;
      var audioPlayer = _state3.audioPlayer;

      if (audioPlayer == undefined) return;
      if (!audioPlayer.buffered.length) return;
      var bufferedEnd = audioPlayer.buffered.end(audioPlayer.buffered.length - 1);
      if (audioPlayer.duration > 0) {
        var percent_remains = bufferedEnd / audioPlayer.duration * 100;
        this.setState({ percent_progress_remains: 100 - percent_remains });
      }
    }
  }, {
    key: 'positionChange',
    value: function positionChange(e) {
      var _this4 = this;

      var audioPlayer = this.state.audioPlayer;

      var elem = _reactDom2.default.findDOMNode(this.refs.progress);
      var elemRect = elem.getClientRects();
      var elemLeft = elemRect[0].left;
      var elemWidth = elemRect[0].width;
      var clickPositionLeft = e.pageX;
      var percent_remains = 100 - (clickPositionLeft - elemLeft) / elemWidth * 100;
      var newTime = audioPlayer.duration - audioPlayer.duration * (percent_remains / 100);
      audioPlayer.currentTime = Math.floor(newTime);
      setTimeout(function () {
        if (audioPlayer.paused) {
          _this4.togglePlay();
        }
      }, 1000);
    }
  }, {
    key: 'forward',
    value: function forward() {
      var audioPlayer = this.state.audioPlayer;

      var newTime = audioPlayer.currentTime + 30;
      if (newTime < audioPlayer.duration) {
        audioPlayer.currentTime = Math.floor(newTime);
      }
    }
  }, {
    key: 'replay',
    value: function replay() {
      var audioPlayer = this.state.audioPlayer;

      var newTime = audioPlayer.currentTime - 30;
      if (newTime > 0) {
        audioPlayer.currentTime = Math.floor(newTime);
      }
    }
  }, {
    key: 'renderPlayerIcons',
    value: function renderPlayerIcons() {
      var playing = this.state.playing;


      var skipButtons = _react2.default.createElement(
        'span',
        { className: 'player__control__icons--skip' },
        _react2.default.createElement(
          'div',
          { className: 'player__control__icon', onClick: this.forward.bind(this) },
          _react2.default.createElement(_Forward2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'player__control__icon', onClick: this.replay.bind(this) },
          _react2.default.createElement(_Replay2.default, { onClick: this.replay.bind(this) })
        )
      );

      if (playing) {
        return _react2.default.createElement(
          'div',
          { className: 'player__control__icons--pause' },
          _react2.default.createElement(
            'div',
            { className: 'player__control__icon', onClick: this.togglePlay.bind(this) },
            _react2.default.createElement(_Pause2.default, null)
          ),
          skipButtons
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'player__control__icons--play' },
        _react2.default.createElement(
          'div',
          { className: 'player__control__icon', onClick: this.togglePlay.bind(this) },
          _react2.default.createElement(_Play2.default, null)
        ),
        skipButtons
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var audio_id = _props.audio_id;
      var audio_secret_token = _props.audio_secret_token;
      var title = _props.title;
      var link = _props.link;
      var _state4 = this.state;
      var playing = _state4.playing;
      var audioPlayer = _state4.audioPlayer;
      var percent_remains = _state4.percent_remains;
      var percent_progress_remains = _state4.percent_progress_remains;
      var duration = _state4.duration;
      var current_time = _state4.current_time;
      var client_id = _state4.client_id;

      var streamUrl = 'https://api.soundcloud.com/tracks/' + audio_id + '/stream?client_id=' + client_id + '&secret_token=' + audio_secret_token;
      var iconClass = playing ? 'player__control__icon--pause' : 'player__control__icon--play';
      iconClass += ' player__control__icon';
      var time_remains = { transform: 'translateX(-' + percent_remains.toString() + '%)' };
      var progress_remains = { transform: 'translateX(-' + percent_progress_remains.toString() + '%)' };

      return _react2.default.createElement(
        'div',
        { className: 'player player__track--active' },
        _react2.default.createElement('audio', { id: 'audio', preload: 'none', ref: 'audio', src: streamUrl }),
        _react2.default.createElement(
          'div',
          { className: 'player__control' },
          this.renderPlayerIcons()
        ),
        _react2.default.createElement(
          'div',
          { className: 'player__display', onClick: this.positionChange.bind(this) },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h4',
              null,
              title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'player__progress' },
            _react2.default.createElement(
              'span',
              { className: 'player__progress__time' },
              current_time
            ),
            _react2.default.createElement(
              'span',
              { className: 'player__progress__bar' },
              _react2.default.createElement(
                'span',
                { ref: 'progress', className: 'player__progress__bar--container' },
                _react2.default.createElement('span', { className: 'player__progress__bar--percent player__progress__bar--progress',
                  style: progress_remains }),
                _react2.default.createElement('span', { className: 'player__progress__bar--percent', style: time_remains })
              )
            ),
            _react2.default.createElement(
              'span',
              { className: 'player__progress__time' },
              duration
            )
          )
        )
      );
    }
  }]);

  return Player;
}(_react.Component);

exports.default = Player;