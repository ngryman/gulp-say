# gulp-say [![npm][npm-image]][npm-url] [![travis][travis-image]][travis-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/ngryman/gulp-say.svg)](https://greenkeeper.io/)

[npm-image]: https://img.shields.io/npm/v/gulp-say.svg?style=flat
[npm-url]: https://npmjs.org/package/gulp-say
[travis-image]: https://img.shields.io/travis/ngryman/gulp-say.svg?style=flat
[travis-url]: https://travis-ci.org/ngryman/gulp-say

> Text To Speech errors for gulp.


If you are tired to switch to the terminal to see error details, or visual notifications
annoys you, well, try our new assistant here.

`gulp-say` will try to parse any `gulp` error and read it to you using your system *Text To Speech*
engine.

**Windows is not supported yet. Any pull request is welcomed.**


## Install

```bash
npm install --save-dev gulp-say
```

## Usage

```javascript
const say = require('gulp-say');

gulp.task('copy', () => {
  return gulp.src('./assets/**')
    .on('error', say({ voice: 'Alice' }))
    .pipe(gulp.dest('dist/'));
});
```

## API

#### `say([opts])`

The following options are available:

 - **`voice`**: *(`string`)*, depending on your `tts` engine, it will use the given voice.
 - **`phrase`**: *(`function`)*, overrides the generated output text.
 - **`speak`**: *(`function`)*, overrides the `tts` engine call.


## License

MIT © [Nicolas Gryman](http://ngryman.sh)
