'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let WINDOW;

function main() {
  WINDOW = new BrowserWindow({width: 800, height: 600});
  WINDOW.setTitle("Edgar");
  WINDOW.loadURL('file://' + __dirname + '/index.html');
  WINDOW.on('closed', function() { WINDOW = null; });
}

app.on('ready', main);
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', function () {  if (WINDOW === null) main(); });
