"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Player = _interopRequireDefault(require("../Player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Player renders correctly and matches snapshot', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Player.default, {
    client_id: "c5a171200f3a0a73a523bba14a1e0a29",
    audio_id: "193179003",
    title: "Easyfun - Fanta"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Player renders the correct elements and props', function () {
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Player.default, {
    client_id: "c5a171200f3a0a73a523bba14a1e0a29",
    audio_id: "193179003",
    title: "Easyfun - Fanta"
  }));
  expect(wrapper.instance().props.audio_id).toEqual('193179003');
  expect(wrapper.instance().props.client_id).toEqual('c5a171200f3a0a73a523bba14a1e0a29');
  expect(wrapper.instance().props.title).toEqual('Easyfun - Fanta');
});