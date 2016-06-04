Commands = {};

Commands.New = function() {
	WORKBENCH.openEditor();
};

Commands.Open = function(file) {
	if(!file) return file_open_dialog(function(f){Commands.Open(f);}, "*.*");
	else WORKBENCH.openEditor(file);
};

Commands.Save = function() {
	if(WORKBENCH.curEditor && WORKBENCH.curEditor.modified) WORKBENCH.curEditor.save();
 };

Commands.SaveAs = function(filename) {
	if(!WORKBENCH.curEditor) return;
	if(!filename) return file_open_dialog(function(f){ if(f) Commands.SaveAs(f); }, "*.*");
	WORKBENCH.curEditor.saveAs(filename);
};

Commands.Close = function() {
	if(WORKBENCH.curEditor) WORKBENCH.curEditor.close();
};

Commands.Undo = function() {
	if(WORKBENCH.curEditor) WORKBENCH.curEditor.undo();
};

Commands.Redo = function() {
	if(WORKBENCH.curEditor) WORKBENCH.curEditor.redo();
};

Commands.Cut = function() {
	if(WORKBENCH.curEditor) WORKBENCH.curEditor.cut();
};

Commands.Copy = function() {
	if(WORKBENCH.curEditor) WORKBENCH.curEditor.copy();
};

Commands.Paste = function() {
	if(WORKBENCH.curEditor) WORKBENCH.curEditor.paste();
};


// TODO
Commands.Quit = function(bForce) {
	if(bForce) {
		WINDOW.close(true);
		gui.App.quit();
	} else {
		if(confirm("Are you sure ?")) Commands.quit(true)
	}
};

Commands.CreateModule = function(hint) {
	WORKBENCH.setModeDesign(false);
	if(!hint) hint = WORKBENCH._createModule_last_hint;
	WORKBENCH._createModule_last_hint = hint;
	if(!hint || !WORKBENCH.curEditor) return;
	WORKBENCH.curEditor.createModule(hint);
};

Commands.CreateLink = function(hint) {
	WORKBENCH.setModeDesign(false);
	if(!hint) hint = WORKBENCH._createLink_last_link_hint;
	WORKBENCH._createLink_last_link_hint = hint;
	if(!WORKBENCH.curEditor) return;
	WORKBENCH.curEditor.createLink(hint);
};

Commands.Delete = function() {
	if(WORKBENCH.curEditor) WORKBENCH.curEditor.delete();
};

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

Commands.toggleModeDesign = function() {
	WORKBENCH.setModeDesign(!WORKBENCH.isModeDesign());
}
