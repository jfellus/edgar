module.exports = [
	{label: '_File', submenu: [
		{label: '_New', accelerator: 'Ctrl+N', role:'new'},
		{label: '_Open', accelerator: 'Ctrl+O', role:'open'},
		{label: '_Close', accelerator: 'Ctrl+W', role:'close'},
		{label: '_Save', accelerator: 'Ctrl+S', role:'save'},
		{label: '_Save As', accelerator: 'Ctrl+Shift+S', role:'saveas'},
		{type: 'separator'},
		{label: '_Quit', accelerator: 'Ctrl+Q', role:'quit'},
	]},

	{label: '_Edit', submenu: [
		{label: '_Undo', accelerator: 'Ctrl+Z', role:'undo'},
		{label: '_Redo', accelerator: 'Ctrl+Shift+Z', role:'redo'},
		{label: '_Select All', accelerator: 'Ctrl+A', role:'selectall'},
		{type: 'separator'},
		{label: '_Cut', accelerator: 'Ctrl+X', role:'cut'},
		{label: '_Copy', accelerator: 'Ctrl+C', role:'copy'},
		{label: '_Paste', accelerator: 'Ctrl+V', role:'paste'},
		{type: 'separator'},
		{label: '_Delete', accelerator: 'Ctrl+D', role:'delete'},
	]},

	{label: '_View', submenu: [
		{label: '_Reload', accelerator: 'Ctrl+R', click: function(item, focusedWindow) { if (focusedWindow)  focusedWindow.reload(); }},
		{label: 'Toggle _Full Screen',  accelerator: 'F11', click: function(item, focusedWindow) { if (focusedWindow) focusedWindow.setFullScreen(!focusedWindow.isFullScreen());  }},
		{label: 'Toggle _Developer Tools', accelerator: 'F12', click: function(item, focusedWindow) { if (focusedWindow) focusedWindow.webContents.toggleDevTools(); }},
	]},

	{label: '_Find', submenu: [

	]},

	{label: '_Help', submenu: [

	]}
];
