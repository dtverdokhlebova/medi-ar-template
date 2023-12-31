import gulp from 'gulp'
import fs from 'node:fs'
import path from 'node:path'
import through from 'through2'
import svg from 'gulp-svg-sprite'

const doNotEditMessage = '//- ВНИМАНИЕ! Этот файл генерируется автоматически.\n//- Любые изменения будут потеряны при следующей компиляции.\n\n'

const generatePugMixins = () => {
  const source = `${process.cwd()}${path.sep}src${path.sep}blocks${path.sep}`
  const files = []
  return through.obj((file, enc, callback) => {
    file = file.path.replace(source, '')
    let mixinsList = doNotEditMessage.replace(/\n /gm, '\n  ')
    files.push(file)
    files.sort()
    for (const blockName of files) {
      mixinsList += `include ${blockName}\n`
    }
    fs.writeFileSync('src/blocks/mixins.pug', mixinsList)
    callback(undefined, file)
  })
}

function pugMixins() {
  return gulp.src(['src/blocks/**/*.pug', '!src/blocks/mixins.pug', '!src/blocks/header/*', '!src/blocks/footer/*'])
    .pipe(generatePugMixins())
}

function svgs() {
  return gulp.src('src/images/**/*.svg')
    .pipe(svg({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(gulp.dest('src/public/images'))
}

export { pugMixins, svgs }
