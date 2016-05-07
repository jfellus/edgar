var util = require("util");
var EventEmitter = require("events").EventEmitter;


function Project(filename) {
	if(filename) this.load(filename);
	this.name = this.filename;
	if(!this.name) this.name = "NewProject";

	this.libs = [];
	this.scripts = [];

	this.addLibrary("promuser-sigproc");
	this.addLibrary("promuser-vision");
	this.addLibrary("OpenCV");

	this.addScript("main.script");
}
util.inherits(Project, EventEmitter);

Project.prototype.addScript = function(filename) {
	this.scripts.push({name:filename, icon:"file.png"});
	this.emit("change");
}

Project.prototype.removeScript = function(filename) {
	this.scripts = this.scripts.filter(function(s) { return s.name != filename; });
	this.emit("change");
}

Project.prototype.closeAllScripts = function() {
	// TODO
}

Project.prototype.addLibrary = function(lib) {
	var library = new Library(this, lib);
	this.libs.push(library);
	this.emit("change");
}

Project.prototype.removeLibrary = function(lib) {
	this.libs = this.libs.filter(function(l) {return l.name != lib; });
	this.emit("change");
}


///////////////
// LIBRARIES //
///////////////

function Library(project, filename) {
	this.project = project;
	this.name = filename;
	this.icon = "library.png";
	this.items = [];
	this.load(filename);
}

Library.prototype.load = function(filename) {
	// TODO
	this.items.push({name:"f_machin", icon:"module.png"});
	this.items.push({name:"f_truc", icon:"module.png"});
	this.items.push({name:"f_bidule", icon:"module.png"});
}
