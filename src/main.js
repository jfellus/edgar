'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function main() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.setTitle("Edgar");
  mainWindow.loadURL('file://' + __dirname + '/workbench/workbench.html');
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() { mainWindow = null; });
}

app.on('ready', main);
app.on('window-all-closed', function () { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', function () {  if (mainWindow === null) main(); });
