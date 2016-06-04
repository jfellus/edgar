module.exports = [
	{label: '&File', submenu: [
		{label: '&New', accelerator: 'Ctrl+N', role:'new'},
		{label: '&Open', accelerator: 'Ctrl+O', role:'open'},
		{label: '&Close', accelerator: 'Ctrl+W', role:'close'},
		{label: '&Save', accelerator: 'Ctrl+S', role:'save'},
		{label: '&Save As', accelerator: 'Ctrl+Shift+S', role:'saveas'},
		{type: 'separator'},
		{label: '&Quit', accelerator: 'Ctrl+Q', role:'quit'},
	]},

	{label: '&Edit', submenu: [
		{label: '&Undo', accelerator: 'Ctrl+Z', role:'undo'},
		{label: '&Redo', accelerator: 'Ctrl+Shift+Z', role:'redo'},
		{label: '&Select All', accelerator: 'Ctrl+A', role:'selectall'},
		{type: 'separator'},
		{label: '&Cut', accelerator: 'Ctrl+X', role:'cut'},
		{label: '&Copy', accelerator: 'Ctrl+C', role:'copy'},
		{label: '&Paste', accelerator: 'Ctrl+V', role:'paste'},
		{type: 'separator'},
		{label: '&Delete', accelerator: 'Ctrl+D', role:'delete'},
		{label: '&Design Mode', accelerator: 'Ctrl+E', role:'toggleModeDesign'},
	]},

	{label: '&View', submenu: [
		{label: '&Reload', accelerator: 'Ctrl+R', click: function(item, focusedWindow) { if (focusedWindow)  focusedWindow.reload(); }},
		{label: 'Toggle &Full Screen',  accelerator: 'F11', click: function(item, focusedWindow) { if (focusedWindow) focusedWindow.setFullScreen(!focusedWindow.isFullScreen());  }},
		{label: 'Toggle &Developer Tools', accelerator: 'F12', click: function(item, focusedWindow) { if (focusedWindow) focusedWindow.webContents.toggleDevTools(); }},
	]},

	{label: '&Find', submenu: [

	]},

	{label: '&Help', submenu: [

	]}
];
