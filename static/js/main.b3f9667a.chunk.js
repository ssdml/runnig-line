(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(d,e,n){d.exports=n(23)},21:function(d,e,n){},23:function(d,e,n){"use strict";n.r(e);var t=n(0),o=n.n(t),r=n(5),i=n.n(r),a=(n(21),n(9)),c=n(6),s=n(7),l=n(10),u=n(8),h=n(11),f=n(1),w=function(d){var e=d.width-2,n=e-6;return o.a.createElement("g",null,o.a.createElement("rect",{x:d.x,y:d.y,width:e,height:e,fill:"white",stroke:d.color,strokeWidth:2}),o.a.createElement("rect",{x:1*d.x+3,y:1*d.y+3,width:n,height:n,fill:d.color}))},v=function(d){for(var e=[],n=0;n<d.numRows;n++)e.push(o.a.createElement(w,{key:n,x:d.x,y:1*d.y+(1*d.width+1*d.disanceY)*n,width:d.width,color:d.colors[n]}));return o.a.createElement("g",null,e)},m=function(d){var e=d.colors.map(function(d,e){return o.a.createElement(v,{key:e,x:10+23*e,y:10,width:20,disanceY:3,numRows:d.length,colors:d})});return o.a.createElement("g",null,e)},g=function(d){function e(){var d;Object(c.a)(this,e),(d=Object(l.a)(this,Object(u.a)(e).call(this))).initNextColomns=d.initNextColomns.bind(Object(f.a)(Object(f.a)(d))),d.initNextColomns(),d.defaultColomn=["#ddd","#ddd","#ddd","#ddd","#ddd"];for(var n=[],t=0;t<30;t++)n.push(d.defaultColomn);return d.state={colors:n},d}return Object(h.a)(e,d),Object(s.a)(e,[{key:"componentDidMount",value:function(){var d=this;setInterval(function(){var e=Object(a.a)(d.state.colors),n=d.nextColomns.pop();e.shift(),e.push(n||d.defaultColomn),d.setState({colors:e})},100)}},{key:"initNextColomns",value:function(){this.nextColomns=[["#000","#000","#000","#000","#000"],["#ddd","#ddd","#000","#ddd","#ddd"],["#ddd","#ddd","#000","#ddd","#ddd"],["#000","#000","#000","#000","#000"],["#ddd","#ddd","#ddd","#ddd","#ddd"],["#000","#000","#000","#000","#000"],["#000","#ddd","#000","#ddd","#000"],["#000","#ddd","#000","#ddd","#000"],["#ddd","#ddd","#ddd","#ddd","#ddd"],["#000","#000","#000","#000","#000"],["#ddd","#ddd","#ddd","#ddd","#000"],["#ddd","#ddd","#ddd","#ddd","#000"],["#ddd","#ddd","#ddd","#ddd","#ddd"],["#000","#000","#000","#000","#000"],["#ddd","#ddd","#ddd","#ddd","#000"],["#ddd","#ddd","#ddd","#ddd","#000"],["#ddd","#ddd","#ddd","#ddd","#ddd"],["#000","#000","#000","#000","#000"],["#000","#ddd","#ddd","#ddd","#000"],["#000","#ddd","#ddd","#ddd","#000"],["#000","#000","#000","#000","#000"],["#ddd","#ddd","#ddd","#ddd","#ddd"],["#000","#000","#000","#ddd","#000"]].reverse()}},{key:"render",value:function(){return o.a.createElement("svg",{width:"1000",height:"400",version:"1.1",viewBox:"0 0 1000 400",preserveAspectRatio:"none"},o.a.createElement(m,{colors:this.state.colors}))}}]),e}(t.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(d){navigator.serviceWorker.register(d).then(function(d){d.onupdatefound=function(){var e=d.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(d){console.error("Error during service worker registration:",d)})}i.a.render(o.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/myapp",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var d="".concat("/myapp","/service-worker.js");p?(function(d){fetch(d).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(d){d.unregister().then(function(){window.location.reload()})}):y(d)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(d),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):y(d)})}}()}},[[12,2,1]]]);
//# sourceMappingURL=main.b3f9667a.chunk.js.map