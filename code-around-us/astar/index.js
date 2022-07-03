(()=>{var e={272:e=>{function t(){let e=Math.min(windowHeight,windowWidth);return e=e>500?500:e,.9*e}e.exports={handleSetup:function(e,s=!1){const i=t(windowWidth,windowHeight);let r;r=s?createCanvas(i,i,WEBGL):createCanvas(i,i),r.parent("p5-container"),frameRate(e)},getCanvasSize:function(){return width},handleWindowResized:function(){const e=t(windowWidth,windowHeight);resizeCanvas(e,e,!0)},initialize:function(e,t,s,i=null){window.setup=e,window.draw=t,window.windowResized=s,i&&(window.mouseClicked=i)}}},414:(e,t,s)=>{const i=s(971);e.exports=class{constructor(e){this.graph=e,this.finished=!1,this.openedVertices=[],this.closedVertices=[],this.current=this.graph.startVertex,this.current.h=this.heuristic(this.current,this.graph.endVertex),this.current.g=0,this.openedVertices.push(this.current)}update(){if(this.openedVertices.length>0){if(this.current=this.getBestOpenVertex(),this.current===this.graph.endVertex)return void(this.finished=!0);this.current!==this.graph.startVertex&&(this.current.state=i.states.checked),this.closeVertex(this.current);let e=this.current.g+1,t=this.graph.getNeighbours(this.current);for(let s of t){if(this.closedVertices.indexOf(s)>-1||s.state===i.states.blocked)continue;let t;this.openedVertices.indexOf(s)<0?(this.openedVertices.push(s),t=!0):t=e<s.g,t&&(s.previous=this.current,s.g=e,s.h=this.heuristic(s,this.graph.endVertex))}}else this.finished=!0}heuristic(e,t){let s=abs(e.x-t.x),i=abs(e.y-t.y);return sqrt(pow(s,2)+pow(i,2))}getBestOpenVertex(){let e=this.openedVertices[0];for(let t of this.openedVertices)t.f()<e.f()&&(e=t);return e}closeVertex(e){this.closedVertices.push(e);let t=this.openedVertices.indexOf(e);this.openedVertices.splice(t,1)}renderResult(){let e=this.graph.endVertex.previous;for(;e&&e.previous;)e.render(color(234,239,50)),e=e.previous}}},957:(e,t,s)=>{const i=s(971);e.exports=class{constructor(e,t,s){this.graphSize=e,this.cellSize=t/e,this.blockedChance=s,this.vertices=this.initializeGraph(),this.startVertex=this.setRandomStartVertex(),this.endVertex=this.setRandomEndVertex()}initializeGraph(){let e=[];for(let t=0;t<this.graphSize;t++){e.push([]);for(let s=0;s<this.graphSize;s++){let r=new i(s,t,this.cellSize);random()<this.blockedChance&&(r.state=i.states.blocked),e[t][s]=r}}return e}setRandomStartVertex(){let e,t;do{e=int(random(this.graphSize)),t=int(random(this.graphSize))}while(this.vertices[t][e].state===i.states.end);return this.vertices[t][e].state=i.states.start,this.vertices[t][e]}setRandomEndVertex(){let e,t;do{e=int(random(this.graphSize)),t=int(random(this.graphSize))}while(this.vertices[t][e].state===i.states.start);return this.vertices[t][e].state=i.states.end,this.vertices[t][e]}getNeighbours(e){let t=[];return e.y>0&&t.push(this.vertices[e.y-1][e.x]),e.x<this.graphSize-1&&t.push(this.vertices[e.y][e.x+1]),e.y<this.graphSize-1&&t.push(this.vertices[e.y+1][e.x]),e.x>0&&t.push(this.vertices[e.y][e.x-1]),t}render(){for(let e=0;e<this.graphSize;e++)for(let t=0;t<this.graphSize;t++)this.vertices[e][t].render()}}},971:e=>{class t{static states={empty:0,blocked:1,start:2,end:3,checked:4};constructor(e,s,i){this.x=e,this.y=s,this.size=i,this.state=t.states.empty,this.g=null,this.h=null,this.previous=null}f(){return this.g+this.h}render(e=null){if(!e)switch(this.state){case t.states.start:e=color(42,237,53);break;case t.states.end:e=color(230,57,70);break;case t.states.checked:e=color(12,182,238);break;case t.states.empty:e=color(255,255,255);break;case t.states.blocked:e=color(91,93,94)}fill(e),strokeWeight(.2),rect(this.x*this.size,this.y*this.size,this.size,this.size)}}e.exports=t}},t={};function s(i){var r=t[i];if(void 0!==r)return r.exports;var h=t[i]={exports:{}};return e[i](h,h.exports,s),h.exports}(()=>{const{handleSetup:e,getCanvasSize:t,handleWindowResized:i,initialize:r}=s(272),h=s(414),n=s(957);let o=null,a=null;function c(){background(255),o=new n(15,t(),.3),a=new h(o),o.render()}r((function(){e(15),c()}),(function(){a.update(),o.render(),a.finished&&(a.renderResult(),noLoop(),setTimeout((()=>{c(),loop()}),1500))}),(function(){i(),c()}))})()})();