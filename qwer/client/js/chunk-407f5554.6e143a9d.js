(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-407f5554"],{"19ea":function(t,i,s){"use strict";s.r(i);var e=s("7a23");const n=Object(e["E"])("data-v-692e76c4");Object(e["u"])("data-v-692e76c4");const a={id:"canvas"};Object(e["s"])();const o=n((function(t,i,s,n,o,h){return Object(e["r"])(),Object(e["d"])("canvas",a)})),h={density:16,drawDistance:24,baseRadius:4,maxLineThickness:4,reactionSensitivity:3,lineThickness:1,points:[],mouse:{x:-1e3,y:-1e3,down:!1},animation:null,canvas:null,context:null,imageInput:null,bgImage:null,bgCanvas:null,bgContext:null,bgContextPixelData:null,init:function(){this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),this.context.globalCompositeOperation="lighter",this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.canvas.style.display="block",this.imageInput=document.createElement("input"),this.imageInput.setAttribute("type","file"),this.imageInput.style.visibility="hidden",this.imageInput.addEventListener("change",this.upload,!1),document.body.appendChild(this.imageInput),this.canvas.addEventListener("mousemove",this.mouseMove,!1),this.canvas.addEventListener("mousedown",this.mouseDown,!1),this.canvas.addEventListener("mouseup",this.mouseUp,!1),this.canvas.addEventListener("mouseout",this.mouseOut,!1),window.onresize=function(){h.canvas.width=window.innerWidth,h.canvas.height=window.innerHeight,h.onWindowResize()},this.loadData("https://pic1.zhimg.com/80/v2-3b1906c98643f07605dbb66412af76b8_720w.png")},preparePoints:function(){var t,i;this.points=[];var s=this.bgContextPixelData.data;for(t=0;t<this.canvas.height;t+=this.density)for(i=0;i<this.canvas.width;i+=this.density){var e=4*(i+t*this.bgContextPixelData.width);if(!(s[e]>200&&s[e+1]>200&&s[e+2]>200||0===s[e+3])){var n="rgba("+s[e]+","+s[e+1]+","+s[e+2]+",1)";this.points.push({x:i,y:t,originalX:i,originalY:t,color:n})}}},updatePoints:function(){var t,i,s,e;for(t=0;t<this.points.length;t++)i=this.points[t],s=Math.atan2(i.y-this.mouse.y,i.x-this.mouse.x),e=this.mouse.down?200*this.reactionSensitivity/Math.sqrt((this.mouse.x-i.x)*(this.mouse.x-i.x)+(this.mouse.y-i.y)*(this.mouse.y-i.y)):100*this.reactionSensitivity/Math.sqrt((this.mouse.x-i.x)*(this.mouse.x-i.x)+(this.mouse.y-i.y)*(this.mouse.y-i.y)),i.x+=Math.cos(s)*e+.05*(i.originalX-i.x),i.y+=Math.sin(s)*e+.05*(i.originalY-i.y)},drawLines:function(){var t,i,s,e,n;for(t=0;t<this.points.length;t++)for(s=this.points[t],this.context.fillStyle=s.color,this.context.strokeStyle=s.color,i=0;i<this.points.length;i++)e=this.points[i],e!=s&&(n=Math.sqrt((e.x-s.x)*(e.x-s.x)+(e.y-s.y)*(e.y-s.y)),n<=this.drawDistance&&(this.context.lineWidth=(1-n/this.drawDistance)*this.maxLineThickness*this.lineThickness,this.context.beginPath(),this.context.moveTo(s.x,s.y),this.context.lineTo(e.x,e.y),this.context.stroke()))},drawPoints:function(){var t,i;for(t=0;t<this.points.length;t++)i=this.points[t],this.context.fillStyle=i.color,this.context.strokeStyle=i.color,this.context.beginPath(),this.context.arc(i.x,i.y,this.baseRadius,0,2*Math.PI,!0),this.context.closePath(),this.context.fill()},draw:function(){this.animation=requestAnimationFrame((function(){h.draw()})),this.clear(),this.updatePoints(),this.drawLines(),this.drawPoints()},clear:function(){this.canvas.width=this.canvas.width},loadData:function(t){this.bgImage=new Image,this.bgImage.crossOrigin="",this.bgImage.src=t,this.bgImage.onload=function(){h.drawImageToBackground()}},drawImageToBackground:function(){var t,i;if(this.bgCanvas=document.createElement("canvas"),this.bgCanvas.width=this.canvas.width,this.bgCanvas.height=this.canvas.height,this.bgImage.width>this.bgCanvas.width-100||this.bgImage.height>this.bgCanvas.height-100){var s=Math.max(this.bgImage.width/(this.bgCanvas.width-100),this.bgImage.height/(this.bgCanvas.height-100));t=this.bgImage.width/s,i=this.bgImage.height/s}else t=this.bgImage.width,i=this.bgImage.height;this.bgContext=this.bgCanvas.getContext("2d"),this.bgContext.drawImage(this.bgImage,(this.canvas.width-t)/2,(this.canvas.height-i)/2,t,i),this.bgContextPixelData=this.bgContext.getImageData(0,0,this.bgCanvas.width,this.bgCanvas.height),this.preparePoints(),this.draw()},mouseDown:function(){h.mouse.down=!0},mouseUp:function(){h.mouse.down=!1},mouseMove:function(t){h.mouse.x=t.offsetX||t.layerX-h.canvas.offsetLeft,h.mouse.y=t.offsetY||t.layerY-h.canvas.offsetTop},mouseOut:function(){h.mouse.x=-1e3,h.mouse.y=-1e3,h.mouse.down=!1},onWindowResize:function(){cancelAnimationFrame(this.animation),this.drawImageToBackground()}};var c={name:"ImageNode",mounted(){h.init()}};s("7b58");c.render=o,c.__scopeId="data-v-692e76c4";i["default"]=c},"1e90":function(t,i,s){},"7b58":function(t,i,s){"use strict";s("1e90")}}]);
//# sourceMappingURL=chunk-407f5554.6e143a9d.js.map