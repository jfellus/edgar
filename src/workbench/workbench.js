const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

let WORKBENCH = window.WORKBENCH = null;
let EXPLORER = window.EXPLORER = null;
var MENUBAR = require('./workbench/menubar');


Polymer({
	is: 'edgar-workbench',
	properties: {
		status:{notify:true},
		views:{notify:true, value:[]},
		editors:{notify:true, value:[]},
		curEditor:{notify:true, value:null, observer:'onCurEditorChanged' },
		selection:{notify:true, value:null, observer:'onSelectionChanged'},
	},

	bindKeyshortcut: function(keystroke, cmd) {
		$(window).keydown(function(evt){
			var key = keystroke.toLowerCase();
			if(!evt.ctrlKey && key.indexOf("ctrl+")!==-1) return;
			if(!evt.shiftKey && key.indexOf("shift+")!==-1) return;
			if(!evt.altKey && key.indexOf("alt+")!==-1) return;
			if(evt.ctrlKey && key.indexOf("ctrl+")===-1) return;
			if(evt.shiftKey && key.indexOf("shift+")===-1) return;
			if(evt.altKey && key.indexOf("alt+")===-1) return;
			var key = key.split("+"); key = key[key.length-1].toUpperCase();
			if( (key === String.fromCharCode(evt.keyCode))
			 || (key === "LEFT" && evt.keyCode === 37)
			 || (key === "RIGHT" && evt.keyCode === 39)
			 || (key === "UP" && evt.keyCode === 38)
			 || (key === "DOWN" && evt.keyCode === 40)
 			 || (key === "SPACE" && evt.keyCode === 32)
			 || (key === "ESCAPE" && evt.keyCode === 27)
			 || (key === "ENTER" && evt.keyCode === 13)
		  	 || (key === "SUPPR" && evt.keyCode === 46)) WORKBENCH.command(cmd);
		});
	},

	attached: function () {
		window.WORKBENCH = WORKBENCH = this;
		this.init();
		this.run();
	},

	init: function() {
		WINDOW.maximize();

		Menu.setApplicationMenu(this.menubar = Menu.buildFromTemplate(MENUBAR));

		$(this.$.toolbar).children().each(function(){
			if(this.tagName === "SEPARATOR") return;
			var cmd = $(this).text().trim();
			var icon = "./resources/icons/" + cmd +".svg";
			$(this).text("");
			$(this).html("<img class='pgcc-workbench' src='"+icon+"' alt='"+cmd+"' title='"+cmd+"'>");
			$(this).click(function(){ WORKBENCH.command(cmd); });
			if($(this).attr("key")) WORKBENCH.bindKeyshortcut($(this).attr("key"), cmd);
		});

		WINDOW.on("close", function() {WORKBENCH.quit();});

		WORKBENCH.bindKeyshortcut("LEFT", "moveLeft");
		WORKBENCH.bindKeyshortcut("RIGHT", "moveRight");
		WORKBENCH.bindKeyshortcut("UP", "moveUp");
		WORKBENCH.bindKeyshortcut("DOWN", "moveDown");
		WORKBENCH.bindKeyshortcut("ctrl+LEFT", "panLeft");
		WORKBENCH.bindKeyshortcut("ctrl+RIGHT", "panRight");
		WORKBENCH.bindKeyshortcut("ctrl+UP", "panUp");
		WORKBENCH.bindKeyshortcut("ctrl+DOWN", "panDown");
		WORKBENCH.bindKeyshortcut("ctrl+E", "toggleModeDesign");
	},

	 run: function() {
		var argv = process.argv.slice(2);

		var file = null;
	  	argv.forEach(function(arg) { if(arg[0]!='-') file = arg });

  //	window.EXPLORER = EXPLORER = this.openView($("<view-explorer></view-explorer>"), "Projects", "left");
  		this.openView($("<view-properties></view-properties>"), "Properties", "right");
  		this.openView($("<view-creator></view-creator>"), "Create", "left");
  		this.openView($("<view-console></view-console>"), "Console", "bottom");


		if(file) Commands.Open(file);
		else Commands.New();
  	},


	//////////////
	// COMMANDS //
	//////////////

	command: function(id) {
		var f = Commands[id];
		if(typeof(f) === 'function') f();
	},

	////////////////
	// EDIT MODES //
	////////////////

	isModeDesign: function() { return this._modeDesign; },
	setModeDesign: function(b) { return this._modeDesign = b===undefined ? true : b; },

	///////////
	// VIEWS //
	///////////

	getView: function(label) {
		var v = this.views.filter(function(v) {return v.label === label;});
		return v.length ? v[0] : null;
	},

	openView: function(view, label, location) {
		if(!location) location = $(view).attr('location');
		if(!location) location = "center";
		if(!label) label = $(view).attr("label");
		if(!label) label = $(view).get(0).tagName;

		this.push('views', {content:view, location:location, label:label});
		$(view).attr("location", location);
		$(view).attr("label", label);
		this.$[location].addTab(view);
		return $(view).get(0);
	},

	openEditor: function(filename) {
		if(filename) this.openView($("<view-editor filename='"+filename+"'></view-editor>"), filename , "center");
		else this.openView($("<view-editor></view-editor>"), "new_script.script", "center");
	},

	closeView: function(label) {
		var location = this.getView(label);
		this.$[location].closeTab(label);
	},


	////////////
	// EVENTS //
	////////////

	onCurEditorChanged: function() {
		this.selection = this.curEditor ? this.curEditor.selection : null;
	},

	onSelectionChanged: function() {
		this.selection = this.curEditor ? this.curEditor.selection : null;
		this.fire("selection", {selection:this.selection});
	},

});
