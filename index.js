'use strict'

const spawn = require('child_process').spawn
const gutil = require('gulp-util')

const SPEAKER = 'darwin' === process.platform ? 'say' : 'festival'

const phrase = function(err) {
  if (err instanceof gutil.PluginError) {
    return `Error in ${err.plugin}, ${err.message}, in ${err.fileName} line ${err.lineNumber}`
  }
  return err
}

const speak = function(voice, text) {
  let args = []
  let piped

  if ('darwin' === process.platform) {
    if (voice) {
      args.push(`-v ${voice}`)
    }
    args.push(text)
  }
  else if ('linux' === process.platform) {
    args.push('--pipe')
    piped = `(${voice}) (SayText "${text}")`
  }
  else {
    console.error('Sorry, your platform is not supported yet!')
    return
  }

  let child = spawn(SPEAKER, args)
  if ('linux' === process.platform) {
    child.stdin.end(piped)
  }
}

const say = function(err, opts) {
  opts = opts || {}

  const text = opts.phrase ? opts.phrase(err) : phrase(err)
  const speakFn = opts.speak || speak

  if (say.muted || opts.muted) {
    gutil.log(text)
  }
  else {
    speakFn(opts.voice, text)
  }

  return this
}

module.exports = say
