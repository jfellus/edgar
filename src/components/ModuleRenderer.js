
function ModuleRenderer(component) {
	this.component = component;
}

ModuleRenderer.prototype.createElement = function(parent) {}
ModuleRenderer.prototype.getSrcAnchor = function(ptDst) { return {x:this.component.m.x, y:this.component.m.y}; }
ModuleRenderer.prototype.getDstAnchor = function(ptSrc) { return {x:this.component.m.x, y:this.component.m.y}; }



//////////////////////////
// RECT MODULE RENDERER //
//////////////////////////

function RectModuleRenderer(component) {
	ModuleRenderer.call(this, component);
}
util.inherits(RectModuleRenderer, ModuleRenderer);

RectModuleRenderer.prototype.createElement = function(parent) {
	this.component.w = 85;
	this.component.h = 65;
	parent.append("rect")
		.classed("module", true)
		.attr("x", -this.component.w/2)
		.attr("y", -this.component.h/2)
		.attr("width", this.component.w)
		.attr("height", this.component.h);
}

RectModuleRenderer.prototype.getSrcAnchor = function(ptDst) {
	var pt = intersectLineRect({x1:this.component.m.x, y1:this.component.m.y, x2:ptDst.x, y2:ptDst.y}, {x:this.component.m.x-this.component.w/2, y:this.component.m.y-this.component.h/2, w:this.component.w, h:this.component.h});
	if(isNaN(pt.x) || isNaN(pt.y)) return this.component.m;
	return pt;
}

RectModuleRenderer.prototype.getDstAnchor = function(ptSrc) {
	var pt = intersectLineRect({x1:this.component.m.x, y1:this.component.m.y, x2:ptSrc.x, y2:ptSrc.y}, {x:this.component.m.x-this.component.w/2, y:this.component.m.y-this.component.h/2, w:this.component.w, h:this.component.h});
	if(isNaN(pt.x) || isNaN(pt.y)) return this.component.m;
	return pt;
}


////////////////////////////
// CIRCLE MODULE RENDERER //
////////////////////////////

function CircleModuleRenderer(component) {
	ModuleRenderer.call(this, component);
}
util.inherits(CircleModuleRenderer, ModuleRenderer);

CircleModuleRenderer.prototype.createElement = function(parent) {
	this.component.r = 30;
	this.component.w = 60;
	this.component.h = 60;
	parent.append("circle")
		.classed("module", true)
		.attr("cx", 0).attr("cy", 0).attr("r", this.component.r);
}

CircleModuleRenderer.prototype.getSrcAnchor = function(ptDst) {
	var pt = intersectLineCircle({x1:this.component.m.x, y1:this.component.m.y, x2:ptDst.x, y2:ptDst.y}, {x:this.component.m.x, y:this.component.m.y, r:this.component.r});
	if(isNaN(pt.x) || isNaN(pt.y)) return this.component.m;
	return pt;
}

CircleModuleRenderer.prototype.getDstAnchor = function(ptSrc) {
	var pt = intersectLineCircle({x1:this.component.m.x, y1:this.component.m.y, x2:ptSrc.x, y2:ptSrc.y}, {x:this.component.m.x, y:this.component.m.y, r:this.component.r});
	if(isNaN(pt.x) || isNaN(pt.y)) return this.component.m;
	return pt;
}


///////////////////////////
// IMAGE MODULE RENDERER //
///////////////////////////

function ImageModuleRenderer(component) {
	ModuleRenderer.call(this, component);
}
util.inherits(ImageModuleRenderer, ModuleRenderer);

ImageModuleRenderer.prototype.createElement = function(parent) {
	this.component.w = 100;
	this.component.h = 100;
	parent.append("svg:image")
		.attr("xlink:href", "./resources/module.png")
		.classed("module", true)
		.attr("x", -this.component.w/2).attr("y", -this.component.h/2)
		.attr("width", 100).attr("height", 100);
}

ImageModuleRenderer.prototype.getSrcAnchor = function(ptDst) {
	var pt = intersectLineRect({x1:this.component.m.x, y1:this.component.m.y, x2:ptDst.x, y2:ptDst.y}, {x:this.component.m.x-this.component.w/2, y:this.component.m.y-this.component.h/2, w:this.component.w, h:this.component.h});
	if(isNaN(pt.x) || isNaN(pt.y)) return this.component.m;
	return pt;
}

ImageModuleRenderer.prototype.getDstAnchor = function(ptSrc) {
	var pt = intersectLineRect({x1:this.component.m.x, y1:this.component.m.y, x2:ptSrc.x, y2:ptSrc.y}, {x:this.component.m.x-this.component.w/2, y:this.component.m.y-this.component.h/2, w:this.component.w, h:this.component.h});
	if(isNaN(pt.x) || isNaN(pt.y)) return this.component.m;
	return pt;
}
