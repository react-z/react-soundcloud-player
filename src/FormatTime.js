let FormatTime = function(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600)
  let minutes = Math.floor((totalSeconds - hours * 3600) / 60)
  let seconds = Math.floor(totalSeconds - hours * 3600 - minutes * 60)
  let result = hours < 1 ? '' : hours + ':'
  result += minutes
  result += ':' + (seconds < 10 ? '0' + seconds : seconds)
  return result
}

module.exports = FormatTime
