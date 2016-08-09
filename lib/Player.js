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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, props));

    _this.state = {
      playing: false,
      audioPlayer: null,
      percent_remains: 100,
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
      });
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      var _this3 = this;

      var _state = this.state;
      var playing = _state.playing;
      var audioPlayer = _state.audioPlayer;

      this.setState({ playing: !playing }, function () {
        _this3.state.playing ? audioPlayer.play() : audioPlayer.pause();
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
      this.setState({ current_time: (0, _FormatTime2.default)(audioPlayer.currentTime * 10) });
      this.setState({ duration: (0, _FormatTime2.default)(audioPlayer.duration * 10) });
      this.setState({ percent_remains: 100 - percent });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var audio_id = _props.audio_id;
      var audio_secret_token = _props.audio_secret_token;
      var title = _props.title;
      var link = _props.link;
      var _state3 = this.state;
      var playing = _state3.playing;
      var audioPlayer = _state3.audioPlayer;
      var percent_remains = _state3.percent_remains;
      var duration = _state3.duration;
      var current_time = _state3.current_time;
      var client_id = _state3.client_id;

      var streamUrl = 'https://api.soundcloud.com/tracks/' + audio_id + '/stream?client_id=' + client_id + '&secret_token=' + audio_secret_token;
      var iconClass = playing ? 'player__control__icon--pause' : 'player__control__icon--play';
      iconClass += ' player__control__icon';
      var percent = { transform: 'translateX(-' + percent_remains.toString() + '%)' };

      return _react2.default.createElement(
        'div',
        { className: 'player player__track--active' },
        _react2.default.createElement('audio', { id: 'audio', ref: 'audio', src: streamUrl }),
        _react2.default.createElement(
          'div',
          { className: 'player__control', onClick: this.togglePlay.bind(this) },
          _react2.default.createElement(
            'svg',
            { className: iconClass, x: '0px', y: '0px', viewBox: '0 0 40 40', 'data-reactid': '.23fudc7q4g0.1.5:0.1.0.$18471/=1$18471.0.1.0.0.2.0.0.1.0.0' },
            _react2.default.createElement('path', { 'class': 'button-circle', d: 'M20,1c10.5,0,19,8.5,19,19s-8.5,19-19,19S1,30.5,1,20S9.5,1,20,1 M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0L20,0z', 'data-reactid': '.23fudc7q4g0.1.5:0.1.0.$18471/=1$18471.0.1.0.0.2.0.0.1.0.0.0' }),
            _react2.default.createElement(
              'g',
              { 'class': 'play-icon icon', 'data-reactid': '.23fudc7q4g0.1.5:0.1.0.$18471/=1$18471.0.1.0.0.2.0.0.1.0.0.1' },
              _react2.default.createElement('path', { d: 'M16.9,12.4c-0.2-0.1-0.5-0.2-0.8,0c-0.2,0.1-0.4,0.4-0.4,0.7v14c0,0.3,0.1,0.5,0.4,0.7c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1l11-7c0.2-0.1,0.3-0.4,0.3-0.6s-0.1-0.5-0.3-0.6L16.9,12.4z', 'data-reactid': '.23fudc7q4g0.1.5:0.1.0.$18471/=1$18471.0.1.0.0.2.0.0.1.0.0.1.0' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'player__display' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h4',
              null,
              title
            ),
            _react2.default.createElement(
              'span',
              { className: 'player__soundcloud' },
              _react2.default.createElement(
                'span',
                null,
                'Via '
              ),
              _react2.default.createElement(
                'a',
                { href: '', rel: 'nofollow', target: '_blank' },
                'SoundCloud'
              )
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
                { className: 'player__progress__bar--container' },
                _react2.default.createElement('span', { className: 'player__progress__bar--percent', style: percent })
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