var Generator = require('yeoman-generator')
var fs = require('fs-extra')
var path = require('path')
const existFile = async function (dir) {
	return new Promise((resolve, reject) => {
		fs.exists(dir, function(exists) {
			// let result = exists ? "该文件已存在" : "不存在文件名"
			console.log('start code' + exists)
			let result = exists ? 1 : 0
			resolve(result)
		})
	})
}
const createDir = async function (dir) {
	return new Promise((resolve, reject) => {
		fs.ensureDir('./' + this.__fileName, function (err) {
	  		if (err) {
	  			reject(err)
	  		} else {
	  			resolve('success')
	  		}
	  	})
	})
}
const  copyFiles = async function (sourdir, targetdir) {
	fs.copySync(sourdir, targetdir)
}
const addFile = async function (dir, sourdir) {
	let isExist = await existFile(dir)
	if (isExist) {
		console.log('the file has exists')
		return
	}
	let dirResult = await createDir(dir)
	if (dirResult === 'success') {
		copyFiles(sourdir, dir)
	}
	// console.log('the dirResult value is ' + dirResult)
}
// const curDir = './generators/app/'
module.exports = class extends Generator {
  writing() {
    // this.fs.write(this.destinationPath(curDir + 'temp/index.js'), 'const foo = 1;')
    // this.copyFiles()
  }
  prompting () {
    let done = this.async();
    return this.prompt([
      {
        type    : 'input',
        name    : '__fileName',
        message : 'Your project name',
        default : 'component' // Default to current folder name
      }
    ]).then(function (answers) {
      this.__fileName = answers.__fileName
      done()
    }.bind(this))
  }
  paths () {
  	this.sourceRoot()
    this.templatePath('index.js')
  }
  copyFiles () {
  	// console.log('the name is ' + this.__fileName)
  	let pathstr = path.join(__dirname, './temp')
 //  	fs.exists(pathstr, function(exists) {
	// 	console.log(exists ? "该文件已存在" : "不存在文件名");
	// })
	addFile('./' + this.__fileName, pathstr)
  	// fs.ensureDir('./' + this.__fileName, function (err) {
  	// 	console.log(err)
  	// })
    // fs.copySync(pathstr, './')
  }
}