"use strict";

var FormatTime = function FormatTime(totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  var seconds = Math.floor(totalSeconds - hours * 3600 - minutes * 60);
  var result = hours < 1 ? '' : hours + ':';
  result += minutes;
  result += ':' + (seconds < 10 ? '0' + seconds : seconds);
  return result;
};

module.exports = FormatTime;