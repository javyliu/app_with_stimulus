process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

//const chokidar = require('chokidar')
const path = require('path')

//environment.config.devServer.before = (app, server) => {
//  //chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
//  //  console.log(event, path);
//  //});
//
//  chokidar.watch([
//    'config/locales/*.yml',
//    'app/views/**/*.erb',
//    'app/assets/**/*.scss'
//  ], {awaitWriteFinish: true}).on('change', () => server.sockWrite(server.sockets, 'content-changed'))
//
//}

environment.config.devServer.watchContentBase = true
environment.config.devServer.contentBase = [
  path.join(__dirname, '../../app/**/*.erb'),
  path.join(__dirname, '../../app/**/*.rb'),
  path.join(__dirname, '../../app/**/*.scss')
]

//environment.config.devServer.watchFiles = {
//  paths: [
//    path.join(__dirname, '../../app/views'),
//    path.join(__dirname, '../../app/controllers'),
//  ],
//}

console.log(environment.config.devServer)

module.exports = environment.toWebpackConfig()
