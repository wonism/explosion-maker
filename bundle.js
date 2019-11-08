!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){var n;t.exports=function t(e,r,i){function o(u,a){if(!r[u]){if(!e[u]){if(!a&&"function"==typeof n&&n)return n(u,!0);if(s)return s(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var h=r[u]={exports:{}};e[u][0].call(h.exports,(function(t){var r=e[u][1][t];return o(r||t)}),h,h.exports,t,e,r,i)}return r[u].exports}for(var s="function"==typeof n&&n,u=0;u<i.length;u++)o(i[u]);return o}({1:[function(t,e,r){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function o(t){return"object"==typeof t&&null!==t}function s(t){return void 0===t}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,r,n,u,a,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var h=new Error('Uncaught, unspecified "error" event. ('+e+")");throw h.context=e,h}if(s(r=this._events[t]))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1),r.apply(this,u)}else if(o(r))for(u=Array.prototype.slice.call(arguments,1),n=(c=r.slice()).length,a=0;a<n;a++)c[a].apply(this,u);return!0},n.prototype.addListener=function(t,e){var r;if(!i(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(r=s(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&r>0&&this._events[t].length>r&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){if(!i(e))throw TypeError("listener must be a function");var r=!1;function n(){this.removeListener(t,n),r||(r=!0,e.apply(this,arguments))}return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var r,n,s,u;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(s=(r=this._events[t]).length,n=-1,r===e||i(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(r)){for(u=s;u-- >0;)if(r[u]===e||r[u].listener&&r[u].listener===e){n=u;break}if(n<0)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(i(r=this._events[t]))this.removeListener(t,r);else if(r)for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(i(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},{}],2:[function(t,e,r){var n,i,o,s,u;u=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),o="ie"===(n=u.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0])[1]&&document.documentMode,(i={name:"version"===n[1]?n[3]:n[1],version:o||parseFloat("opera"===n[1]&&n[4]?n[4]:n[2]),platform:{name:u.match(/ip(?:ad|od|hone)/)?"ios":(u.match(/(?:webos|android)/)||s.match(/mac|win|linux/)||["other"])[0]}})[i.name]=!0,i[i.name+parseInt(i.version,10)]=!0,i.platform[i.platform.name]=!0,e.exports=i},{}],3:[function(t,e,r){var n,i,o,s={}.hasOwnProperty,u=[].indexOf||function(t){for(var e=0,r=this.length;e<r;e++)if(e in this&&this[e]===t)return e;return-1},a=[].slice;n=t("events").EventEmitter,o=t("./browser.coffee"),i=function(t){var e,r;function n(t){var r,n,i;for(n in this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(t),e)i=e[n],null==(r=this.options)[n]&&(r[n]=i)}return function(t,e){for(var r in e)s.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype}(n,t),e={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},r={delay:500,copy:!1},n.prototype.setOption=function(t,e){if(this.options[t]=e,null!=this._canvas&&("width"===t||"height"===t))return this._canvas[t]=e},n.prototype.setOptions=function(t){var e,r,n;for(e in r=[],t)s.call(t,e)&&(n=t[e],r.push(this.setOption(e,n)));return r},n.prototype.addFrame=function(t,e){var n,i;for(i in null==e&&(e={}),(n={}).transparent=this.options.transparent,r)n[i]=e[i]||r[i];if(null==this.options.width&&this.setOption("width",t.width),null==this.options.height&&this.setOption("height",t.height),"undefined"!=typeof ImageData&&null!==ImageData&&t instanceof ImageData)n.data=t.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&t instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&t instanceof WebGLRenderingContext)e.copy?n.data=this.getContextData(t):n.context=t;else{if(null==t.childNodes)throw new Error("Invalid image");e.copy?n.data=this.getImageData(t):n.image=t}return this.frames.push(n)},n.prototype.render=function(){var t,e,r;if(this.running)throw new Error("Already running");if(null==this.options.width||null==this.options.height)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var t,e,r;for(r=[],t=0,e=this.frames.length;0<=e?t<e:t>e;0<=e?++t:--t)r.push(null);return r}.call(this),e=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(t=0,r=e;0<=r?t<r:t>r;0<=r?++t:--t)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},n.prototype.abort=function(){for(var t;null!=(t=this.activeWorkers.shift());)this.log("killing active worker"),t.terminate();return this.running=!1,this.emit("abort")},n.prototype.spawnWorkers=function(){var t,e,r,n;return t=Math.min(this.options.workers,this.frames.length),function(){r=[];for(var n=e=this.freeWorkers.length;e<=t?n<t:n>t;e<=t?n++:n--)r.push(n);return r}.apply(this).forEach((n=this,function(t){var e;return n.log("spawning worker "+t),(e=new Worker(n.options.workerScript)).onmessage=function(t){return n.activeWorkers.splice(n.activeWorkers.indexOf(e),1),n.freeWorkers.push(e),n.frameFinished(t.data)},n.freeWorkers.push(e)})),t},n.prototype.frameFinished=function(t){var e,r;if(this.log("frame "+t.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[t.index]=t,!0===this.options.globalPalette&&(this.options.globalPalette=t.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(e=1,r=this.freeWorkers.length;1<=r?e<r:e>r;1<=r?++e:--e)this.renderNextFrame();return u.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},n.prototype.finishRendering=function(){var t,e,r,n,i,o,s,u,a,c,h,f,l,p,d,y;for(u=0,i=0,a=(p=this.imageParts).length;i<a;i++)u+=((e=p[i]).data.length-1)*e.pageSize+e.cursor;for(u+=e.pageSize-e.cursor,this.log("rendering finished - filesize "+Math.round(u/1e3)+"kb"),t=new Uint8Array(u),f=0,o=0,c=(d=this.imageParts).length;o<c;o++)for(r=s=0,h=(y=(e=d[o]).data).length;s<h;r=++s)l=y[r],t.set(l,f),r===e.data.length-1?f+=e.cursor:f+=e.pageSize;return n=new Blob([t],{type:"image/gif"}),this.emit("finished",n,t)},n.prototype.renderNextFrame=function(){var t,e,r;if(0===this.freeWorkers.length)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return t=this.frames[this.nextFrame++],r=this.freeWorkers.shift(),e=this.getTask(t),this.log("starting frame "+(e.index+1)+" of "+this.frames.length),this.activeWorkers.push(r),r.postMessage(e)},n.prototype.getContextData=function(t){return t.getImageData(0,0,this.options.width,this.options.height).data},n.prototype.getImageData=function(t){var e;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),(e=this._canvas.getContext("2d")).setFill=this.options.background,e.fillRect(0,0,this.options.width,this.options.height),e.drawImage(t,0,0),this.getContextData(e)},n.prototype.getTask=function(t){var e,r;if(r={index:e=this.frames.indexOf(t),last:e===this.frames.length-1,delay:t.delay,transparent:t.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===o.name},null!=t.data)r.data=t.data;else if(null!=t.context)r.data=this.getContextData(t.context);else{if(null==t.image)throw new Error("Invalid frame");r.data=this.getImageData(t.image)}return r},n.prototype.log=function(){var t;if(t=1<=arguments.length?a.call(arguments,0):[],this.options.debug)return console.log.apply(console,t)},n}(n),e.exports=i},{"./browser.coffee":2,events:1}]},{},[3])(3)},function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function s(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function u(t){return"function"==typeof t}var a=!1,c={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;a=t},get useDeprecatedSynchronousErrorHandling(){return a}};function h(t){setTimeout((function(){throw t}),0)}var f={closed:!0,next:function(t){},error:function(t){if(c.useDeprecatedSynchronousErrorHandling)throw t;h(t)},complete:function(){}},l=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function p(t){return null!==t&&"object"==typeof t}var d=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),y=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var r=this._parentOrParents,n=this._unsubscribe,i=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(null!==r)for(var o=0;o<r.length;++o){r[o].remove(this)}if(u(n))try{n.call(this)}catch(t){e=t instanceof d?v(t.errors):[t]}if(l(i)){o=-1;for(var s=i.length;++o<s;){var a=i[o];if(p(a))try{a.unsubscribe()}catch(t){e=e||[],t instanceof d?e=e.concat(v(t.errors)):e.push(t)}}}if(e)throw new d(e)}},t.prototype.add=function(e){var r=e;if(!e)return t.EMPTY;switch(typeof e){case"function":r=new t(e);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof t)){var n=r;(r=new t)._subscriptions=[n]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var i=r._parentOrParents;if(null===i)r._parentOrParents=this;else if(i instanceof t){if(i===this)return r;r._parentOrParents=[i,this]}else{if(-1!==i.indexOf(this))return r;i.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[r]:o.push(r),r},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function v(t){return t.reduce((function(t,e){return t.concat(e instanceof d?e.errors:e)}),[])}var b=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),m=function(t){function e(r,n,i){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=f;break;case 1:if(!r){o.destination=f;break}if("object"==typeof r){r instanceof e?(o.syncErrorThrowable=r.syncErrorThrowable,o.destination=r,r.add(o)):(o.syncErrorThrowable=!0,o.destination=new g(o,r));break}default:o.syncErrorThrowable=!0,o.destination=new g(o,r,n,i)}return o}return s(e,t),e.prototype[b]=function(){return this},e.create=function(t,r,n){var i=new e(t,r,n);return i.syncErrorThrowable=!1,i},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(y),g=function(t){function e(e,r,n,i){var o,s=t.call(this)||this;s._parentSubscriber=e;var a=s;return u(r)?o=r:r&&(o=r.next,n=r.error,i=r.complete,r!==f&&(u((a=Object.create(r)).unsubscribe)&&s.add(a.unsubscribe.bind(a)),a.unsubscribe=s.unsubscribe.bind(s))),s._context=a,s._next=o,s._error=n,s._complete=i,s}return s(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;c.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=c.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):h(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;h(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};c.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,r),this.unsubscribe()):(this.__tryOrUnsub(r),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),c.useDeprecatedSynchronousErrorHandling)throw t;h(t)}},e.prototype.__tryOrSetError=function(t,e,r){if(!c.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,r)}catch(e){return c.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(h(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(m);var _=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function w(){}function x(t){return t?1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}:w}var E=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var r=new t;return r.source=this,r.operator=e,r},t.prototype.subscribe=function(t,e,r){var n=this.operator,i=function(t,e,r){if(t){if(t instanceof m)return t;if(t[b])return t[b]()}return t||e||r?new m(t,e,r):new m(f)}(t,e,r);if(n?i.add(n.call(i,this.source)):i.add(this.source||c.useDeprecatedSynchronousErrorHandling&&!i.syncErrorThrowable?this._subscribe(i):this._trySubscribe(i)),c.useDeprecatedSynchronousErrorHandling&&i.syncErrorThrowable&&(i.syncErrorThrowable=!1,i.syncErrorThrown))throw i.syncErrorValue;return i},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){c.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,r=e.closed,n=e.destination,i=e.isStopped;if(r||i)return!1;t=n&&n instanceof m?n:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var r=this;return new(e=S(e))((function(e,n){var i;i=r.subscribe((function(e){try{t(e)}catch(t){n(t),i&&i.unsubscribe()}}),n,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[_]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:x(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=S(t))((function(t,r){var n;e.subscribe((function(t){return n=t}),(function(t){return r(t)}),(function(){return t(n)}))}))},t.create=function(e){return new t(e)},t}();function S(t){if(t||(t=c.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function O(t,e){return function(r){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return r.lift(new k(t,e))}}var k=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new L(t,this.project,this.thisArg))},t}(),L=function(t){function e(e,r,n){var i=t.call(this,e)||this;return i.project=r,i.count=0,i.thisArg=n||i,i}return s(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(m);var P=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new T(t,this.nextOrObserver,this.error,this.complete))},t}(),T=function(t){function e(e,r,n,i){var o=t.call(this,e)||this;return o._tapNext=w,o._tapError=w,o._tapComplete=w,o._tapError=n||w,o._tapComplete=i||w,u(r)?(o._context=o,o._tapNext=r):r&&(o._context=r,o._tapNext=r.next||w,o._tapError=r.error||w,o._tapComplete=r.complete||w),o}return s(e,t),e.prototype._next=function(t){try{this._tapNext.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.next(t)},e.prototype._error=function(t){try{this._tapError.call(this._context,t)}catch(t){return void this.destination.error(t)}this.destination.error(t)},e.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(t){return void this.destination.error(t)}return this.destination.complete()},e}(m),j=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(m),D=function(t){function e(e,r,n){var i=t.call(this)||this;return i.parent=e,i.outerValue=r,i.outerIndex=n,i.index=0,i}return s(e,t),e.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},e.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},e}(m);function A(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var C=A(),I=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function F(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var W=function(t){if(t&&"function"==typeof t[_])return i=t,function(t){var e=i[_]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(I(t))return n=t,function(t){for(var e=0,r=n.length;e<r&&!t.closed;e++)t.next(n[e]);t.complete()};if(F(t))return r=t,function(t){return r.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,h),t};if(t&&"function"==typeof t[C])return e=t,function(t){for(var r=e[C]();;){var n=r.next();if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof r.return&&t.add((function(){r.return&&r.return()})),t};var e,r,n,i,o=p(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+o+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function N(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[_]}(t))return function(t,e){return new E((function(r){var n=new y;return n.add(e.schedule((function(){var i=t[_]();n.add(i.subscribe({next:function(t){n.add(e.schedule((function(){return r.next(t)})))},error:function(t){n.add(e.schedule((function(){return r.error(t)})))},complete:function(){n.add(e.schedule((function(){return r.complete()})))}}))}))),n}))}(t,e);if(F(t))return function(t,e){return new E((function(r){var n=new y;return n.add(e.schedule((function(){return t.then((function(t){n.add(e.schedule((function(){r.next(t),n.add(e.schedule((function(){return r.complete()})))})))}),(function(t){n.add(e.schedule((function(){return r.error(t)})))}))}))),n}))}(t,e);if(I(t))return function(t,e){return new E((function(r){var n=new y,i=0;return n.add(e.schedule((function(){i!==t.length?(r.next(t[i++]),r.closed||n.add(this.schedule())):r.complete()}))),n}))}(t,e);if(function(t){return t&&"function"==typeof t[C]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new E((function(r){var n,i=new y;return i.add((function(){n&&"function"==typeof n.return&&n.return()})),i.add(e.schedule((function(){n=t[C](),i.add(e.schedule((function(){if(!r.closed){var t,e;try{var i=n.next();t=i.value,e=i.done}catch(t){return void r.error(t)}e?r.complete():(r.next(t),this.schedule())}})))}))),i}))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}var M=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new R(t,this.project))},t}(),R=function(t){function e(e,r){var n=t.call(this,e)||this;return n.project=r,n.index=0,n}return s(e,t),e.prototype._next=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,r)},e.prototype._innerSub=function(t,e,r){var n=this.innerSubscription;n&&n.unsubscribe();var i=new D(this,void 0,void 0);this.destination.add(i),this.innerSubscription=function(t,e,r,n,i){if(void 0===i&&(i=new D(t,r,n)),!i.closed)return e instanceof E?e.subscribe(i):W(e)(i)}(this,t,e,r,i)},e.prototype._complete=function(){var e=this.innerSubscription;e&&!e.closed||t.prototype._complete.call(this),this.unsubscribe()},e.prototype._unsubscribe=function(){this.innerSubscription=null},e.prototype.notifyComplete=function(e){this.destination.remove(e),this.innerSubscription=null,this.isStopped&&t.prototype._complete.call(this)},e.prototype.notifyNext=function(t,e,r,n,i){this.destination.next(e)},e}(j);var U=t=>new Promise((e,r)=>{const n=new FileReader;n.readAsDataURL(t),n.onload=t=>{const i=n.result,o=new Image;o.src=i,o.onload=t=>{const r=document.createElement("canvas");r.width=128,r.height=128;const n=r.getContext("2d");n.drawImage(o,0,0,128,128),e(n)},n.onerror=r}});const H=document.getElementById("loader"),V=document.getElementById("animated-image"),z=(document.getElementById("image"),document.getElementById("empty")),B=document.getElementById("file-uploader");var q,Y,G;(function t(e,r,n,i){return u(n)&&(i=n,n=void 0),i?t(e,r,n).pipe(O((function(t){return l(t)?i.apply(void 0,t):i(t)}))):new E((function(t){!function t(e,r,n,i,o){var s;if(function(t){return t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}(e)){var u=e;e.addEventListener(r,n,o),s=function(){return u.removeEventListener(r,n,o)}}else if(function(t){return t&&"function"==typeof t.on&&"function"==typeof t.off}(e)){var a=e;e.on(r,n),s=function(){return a.off(r,n)}}else if(function(t){return t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}(e)){var c=e;e.addListener(r,n),s=function(){return c.removeListener(r,n)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var h=0,f=e.length;h<f;h++)t(e[h],r,n,i,o)}i.add(s)}(e,r,(function(e){arguments.length>1?t.next(Array.prototype.slice.call(arguments)):t.next(e)}),t,n)}))})(B,"change").pipe(O(t=>t.target.files),O(t=>t[0]),(q=()=>{H.setAttribute("class","active"),B.setAttribute("disabled","disabled")},function(t){return t.lift(new P(q,Y,G))}),function t(e,r){return"function"==typeof r?function(n){return n.pipe(t((function(t,n){return(i=e(t,n),o?N(i,o):i instanceof E?i:new E(W(i))).pipe(O((function(e,i){return r(t,e,n,i)})));var i,o})))}:function(t){return t.lift(new M(e))}}(U)).subscribe(t=>{const e=document.querySelectorAll("#image-group img"),r=[t,t,t,t,z,z,t,t,t,z,z,t,z,z,t,z,t,z,t,z,t,z,...Array.from(e)],n=new i.a({workers:4,quality:10});r.forEach(t=>{n.addFrame(t,{delay:10})}),n.on("finished",t=>{const e=URL.createObjectURL(t);H.removeAttribute("class"),B.removeAttribute("disabled"),V.src=e}),n.render()},()=>{H.removeAttribute("class"),B.removeAttribute("disabled"),alert("Failed to make explosion")})}])}));