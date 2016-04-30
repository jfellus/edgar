Commands = {};

Commands.New = function() { WORKBENCH.newDocument(); };
Commands.Open = function(file) {
	if(!file) return file_open_dialog(function(f){Commands.Open(f);}, "*.*");
	else WORKBENCH.open(file);
};
Commands.Save = function() { WORKBENCH.save(); };

Commands.SaveAs = function() { WORKBENCH.saveAs(); };
Commands.Close = function() { WORKBENCH.close(); };

Commands.Undo = function() { WORKBENCH.undo(); };
Commands.Redo = function() { WORKBENCH.redo(); };
Commands.Cut = function() {	WORKBENCH.cut();};
Commands.Copy = function() { WORKBENCH.copy();};
Commands.Paste = function() { WORKBENCH.paste();};
Commands.Quit = function() {WORKBENCH.quit();};

Commands.CreateModule = function() {WORKBENCH.createModule();};
Commands.CreateLink = function() { WORKBENCH.createLink();};
Commands.Delete = function() { WORKBENCH.delete();};

Commands.Search = function() {};

Commands.Compile = function() {};
Commands.Start = function() {};
Commands.Stop = function() {};



Commands.moveUp = function() { if(WORKBENCH.curEditor) WORKBENCH.curEditor.moveUp(); }
Commands.moveDown = function() { if(WORKBENCH.curEditor) WORKBENCH.curEditor.moveDown(); }
Commands.moveRight = function() { if(WORKBENCH.curEditor) WORKBENCH.curEditor.moveRight(); }
Commands.moveLeft = function() { if(WORKBENCH.curEditor) WORKBENCH.curEditor.moveLeft(); }

Commands.panUp = function() { if(WORKBENCH.curEditor) WORKBENCH.curEditor.panUp(); }
Commands.panDown = function() { if(WORKBENCH.curEditor) WORKBENCH.curEditor.panDown(); }
Commands.panRight = function() { if(WORKBENCH.curEditor) WORKBENCH.curEditor.panRight(); }
Commands.panLeft = function() { if(WORKBENCH.curEditor) WORKBENCH.curEditor.panLeft(); }
