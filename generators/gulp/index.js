var Generator = require('yeoman-generator')
var gulp = require('gulp')
var path = require('path')
const concat = require('gulp-concat')
const minify = require('gulp-minify')
// const bable = require('gulp-babel')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const startGulp = () => {
	let curpath = path.join(__dirname, './')
  	console.log('start the code' + curpath)
  	let jssrc = curpath + 'temp/index.js'
  	let towsrc = curpath + 'temp/test2.js'
  	gulp.task('somename', function () {
  		console.log('has change')
  		gulp.src(curpath + 'temp/*.js')
  		.pipe(concat('all.js'))
  		.pipe(minify())
  		.pipe(gulp.dest('build'))
  	})
  	gulp.start('somename')
}
const bableFormat = () => {
	let curpath = path.join(__dirname)
  	console.log('start the code' + curpath)
  	// let jssrc = curpath + 'temp/index.js'
  	// let towsrc = curpath + 'temp/test2.js'
  	// gulp.task('somename', function () {
  	// 	console.log('has too change')
  	// 	gulp.src(curpath + '/temp/*.js')
  	// 	.pipe(bable({
  	// 		presets: ['env']
  	// 	}))
  	// 	// .pipe(minify())
  	// 	.pipe(gulp.dest('build'))
  	// })
  	gulp.task('browserify', function () {
  		console.log('the browserify')
  		let b = browserify({
  			entries: curpath + '/temp/index.js'
  		})
  		return b.transform("babelify", {presets: ["es2015"]}) // ES6转ES5
  			.bundle()
  			.pipe(source('index.js'))  // 解决browserify数据流适配问题
  			.pipe(gulp.dest('build/'))
  	})
  	// gulp.start('somename')
  	gulp.task('start', ['browserify'])
  	gulp.start()
}
module.exports = class extends Generator {
	 writing() {
	 	// let curDir = path.join(__dirname, './temp/index.js')
	 	// console.log('the path is ' + curDir)
	  //   this.fs.write(this.destinationPath(curDir), 'const foo = 1;')
	  }
	  startGulp () {
	  	bableFormat()
	  }
}