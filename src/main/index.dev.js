/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
import { session } from 'electron'
require('electron-debug')({ showDevTools: true })

// Install `vue-devtools`
require('electron').app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  // BrowserWindow.addDevToolsExtension('node_modules/vue-devtools/vender')
  session.defaultSession.loadExtension('/node_modules/vue-devtools/vender')
})

// Require `main` process to boot app
require('./index')