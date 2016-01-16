import say from '.'
import test from 'ava'
import { PluginError } from 'gulp-util'

const testSay = function(t, err, expect) {
  say(err, {
    speak: (voice, text) => {
      t.is(text, expect)
    }
  })
}

test('says the given plugin error', t => {
  const err = new PluginError('foo', 'Bob is snob', {
    fileName: 'bar',
    lineNumber: 1337
  })

  testSay(t, err, 'Error in foo, Bob is snob, in bar line 1337')
})

test('says the given string', t => {
  const err = 'Alice is the vice'
  testSay(t, err, 'Alice is the vice')
})
