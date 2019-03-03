"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FormatTime = _interopRequireDefault(require("./FormatTime"));

var _Play = _interopRequireDefault(require("./icons/Play"));

var _Pause = _interopRequireDefault(require("./icons/Pause"));

var _Replay = _interopRequireDefault(require("./icons/Replay"));

var _Forward = _interopRequireDefault(require("./icons/Forward"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  transition: transform 0.2s;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: #f50;\n  display: block;\n  background: #ccc;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  transition: transform 0.2s;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: #f50;\n  display: block;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  width: 100%;\n  display: block;\n  padding: 0.1rem 0;\n  margin: 0 0.5rem;\n  cursor: pointer;\n  display: block;\n  position: relative;\n  width: 100%;\n  background: #eee;\n  border-radius: 2px;\n  overflow: hidden;\n  transform: translateZ(0);\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.1rem;\n  letter-spacing: 0.1rem;\n  line-height: 1rem;\n  color: #444;\n  flex: 0 1 auto;\n  vertical-align: middle;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  text-align: right;\n  margin-right: 1rem;\n  margin-left: 0;\n  font-feature-settings: tnum;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  margin: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 0.4rem;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 1 100%;\n  margin-bottom: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 1.2rem;\n  min-width: 6rem;\n  transition: fill 125ms ease-in-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #444;\n  transition: color 125ms ease-in-out;\n  background: white;\n  position: relative;\n  padding: 1.8rem;\n  z-index: 5;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  /* active */\n  border-color: #a2a2a2;\n  background: white;\n  z-index: 10;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * SoundCloud Player
 * A simple SoundCloud player.
 **/
var Player =
/*#__PURE__*/
function (_Component) {
  _inherits(Player, _Component);

  _createClass(Player, null, [{
    key: "propTypes",
    get: function get() {
      return {
        audio_id: _propTypes.default.string.isRequired,
        audio_secret_token: _propTypes.default.string,
        client_id: _propTypes.default.string.isRequired,
        title: _propTypes.default.string
      };
    }
  }]);

  function Player(props) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, props));
    _this.state = {
      playing: false,
      audioPlayer: null,
      percent_remains: 100,
      percent_progress_remains: 100,
      duration: '0:00',
      current_time: '0:00'
    };
    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        audioPlayer: _reactDom.default.findDOMNode(this.refs.audio)
      }, function () {
        _this2.state.audioPlayer.ontimeupdate = function () {
          _this2.timeUpdated();
        };

        _this2.state.audioPlayer.onprogress = function () {
          _this2.progressUpdated();
        };
      });
    }
  }, {
    key: "togglePlay",
    value: function togglePlay() {
      var _this3 = this;

      var _this$state = this.state,
          playing = _this$state.playing,
          audioPlayer = _this$state.audioPlayer;
      this.setState({
        playing: !playing,
        showAudioPlayer: true
      }, function () {
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
    key: "timeUpdated",
    value: function timeUpdated() {
      var audioPlayer = this.state.audioPlayer;

      if (audioPlayer == undefined) {
        return;
      }

      var percent = audioPlayer.currentTime / audioPlayer.duration * 100;
      this.setState({
        current_time: (0, _FormatTime.default)(audioPlayer.currentTime)
      });
      this.setState({
        duration: (0, _FormatTime.default)(audioPlayer.duration)
      });
      this.setState({
        percent_remains: 100 - percent
      });
    }
  }, {
    key: "progressUpdated",
    value: function progressUpdated() {
      var audioPlayer = this.state.audioPlayer;
      if (audioPlayer == undefined) return;
      if (!audioPlayer.buffered.length) return;
      var bufferedEnd = audioPlayer.buffered.end(audioPlayer.buffered.length - 1);

      if (audioPlayer.duration > 0) {
        var percent_remains = bufferedEnd / audioPlayer.duration * 100;
        this.setState({
          percent_progress_remains: 100 - percent_remains
        });
      }
    }
  }, {
    key: "positionChange",
    value: function positionChange(e) {
      var _this4 = this;

      var audioPlayer = this.state.audioPlayer;

      var elem = _reactDom.default.findDOMNode(this.refs.progress);

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
    key: "forward",
    value: function forward() {
      var audioPlayer = this.state.audioPlayer;
      var newTime = audioPlayer.currentTime + 30;

      if (newTime < audioPlayer.duration) {
        audioPlayer.currentTime = Math.floor(newTime);
      }
    }
  }, {
    key: "replay",
    value: function replay() {
      var audioPlayer = this.state.audioPlayer;
      var newTime = audioPlayer.currentTime - 30;

      if (newTime > 0) {
        audioPlayer.currentTime = Math.floor(newTime);
      }
    }
  }, {
    key: "renderPlayerIcons",
    value: function renderPlayerIcons() {
      var playing = this.state.playing;

      var skipButtons = _react.default.createElement("span", null, _react.default.createElement(PlayerControlIcon, {
        onClick: this.forward.bind(this)
      }, _react.default.createElement(_Forward.default, null)), _react.default.createElement(PlayerControlIcon, {
        onClick: this.replay.bind(this)
      }, _react.default.createElement(_Replay.default, {
        onClick: this.replay.bind(this)
      })));

      if (playing) {
        return _react.default.createElement("div", null, _react.default.createElement(PlayerControlIcon, {
          onClick: this.togglePlay.bind(this)
        }, _react.default.createElement(_Pause.default, null)), skipButtons);
      }

      return _react.default.createElement("div", null, _react.default.createElement(PlayerControlIcon, {
        onClick: this.togglePlay.bind(this)
      }, _react.default.createElement(_Play.default, null)), skipButtons);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          audio_id = _this$props.audio_id,
          audio_secret_token = _this$props.audio_secret_token,
          title = _this$props.title,
          client_id = _this$props.client_id;
      var _this$state2 = this.state,
          percent_remains = _this$state2.percent_remains,
          percent_progress_remains = _this$state2.percent_progress_remains,
          duration = _this$state2.duration,
          current_time = _this$state2.current_time;
      var streamUrl = "https://api.soundcloud.com/tracks/".concat(audio_id, "/stream?client_id=").concat(client_id, "&secret_token=").concat(audio_secret_token);
      var time_remains = {
        transform: "translateX(-".concat(percent_remains.toString(), "%)")
      };
      var progress_remains = {
        transform: "translateX(-".concat(percent_progress_remains.toString(), "%)")
      };
      return _react.default.createElement(PlayerWrapper, null, _react.default.createElement("audio", {
        id: "audio",
        preload: "none",
        ref: "audio",
        src: streamUrl
      }), _react.default.createElement(PlayerControl, null, this.renderPlayerIcons()), _react.default.createElement(PlayerDisplay, {
        onClick: this.positionChange.bind(this)
      }, _react.default.createElement("div", null, _react.default.createElement("h4", null, title)), _react.default.createElement(PlayerProgress, null, _react.default.createElement(PlayerProgressTime, null, current_time), _react.default.createElement(PlayerProgressBar, {
        ref: "progress"
      }, _react.default.createElement(PlayerProgressRemains, {
        style: progress_remains
      }), _react.default.createElement(PlayerTimeRemains, {
        style: time_remains
      })), _react.default.createElement(PlayerProgressTime, null, duration))));
    }
  }]);

  return Player;
}(_react.Component);

exports.default = Player;

var PlayerWrapper = _styledComponents.default.div(_templateObject());

var PlayerControl = _styledComponents.default.div(_templateObject2());

var PlayerDisplay = _styledComponents.default.div(_templateObject3());

var PlayerControlIcon = _styledComponents.default.div(_templateObject4());

var PlayerProgress = _styledComponents.default.div(_templateObject5());

var PlayerProgressPosition = _styledComponents.default.span(_templateObject6());

var PlayerProgressTime = _styledComponents.default.span(_templateObject7());

var PlayerProgressBar = _styledComponents.default.span(_templateObject8());

var PlayerTimeRemains = _styledComponents.default.span(_templateObject9());

var PlayerProgressRemains = _styledComponents.default.span(_templateObject10());