!function(e){var r=window.webpackJsonp;window.webpackJsonp=function(n,t,o){for(var c,i,a,d=0,s=[];d<n.length;d++)i=n[d],P[i]&&s.push(P[i][0]),P[i]=0;for(c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);for(r&&r(n,t,o);s.length;)s.shift()();if(o)for(d=0;d<o.length;d++)a=H(H.s=o[d]);return a};var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,r){if(!g[e]||!m[e])return;for(var n in m[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(h[n]=r[n]);0==--y&&0===b&&j()}(e,r),n&&n(e,r)};var t,o=!0,c="b040db9c73063cb8a940",i=1e4,a={},d=[],s=[];var l=[],p="idle";function u(e){p=e;for(var r=0;r<l.length;r++)l[r].call(null,e)}var f,h,v,y=0,b=0,w={},m={},g={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,u("check"),(r=i,r=r||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,o=H.p+""+c+".hot-update.json";t.open("GET",o,!0),t.timeout=r,t.send(null)}catch(e){return n(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+o+" failed."));else{try{var r=JSON.parse(t.responseText)}catch(e){return void n(e)}e(r)}}})).then(function(e){if(!e)return u("idle"),null;m={},w={},g=e.c,v=e.h,u("prepare");var r=new Promise(function(e,r){f={resolve:e,reject:r}});for(var n in h={},P)E(n);return"prepare"===p&&0===b&&0===y&&j(),r});var r}function E(e){g[e]?(m[e]=!0,y++,function(e){var r=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=H.p+""+e+"."+c+".hot-update.js",r.appendChild(n)}(e)):w[e]=!0}function j(){u("ready");var e=f;if(f=null,e)if(o)Promise.resolve().then(function(){return D(o)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&r.push(O(n));e.resolve(r)}}function D(r){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,t,o,i,s;function l(e){for(var r=[e],n={},t=r.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,a=o.chain;if((i=x[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var d=0;d<i.parents.length;d++){var s=i.parents[d],l=x[s];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([s]),moduleId:c,parentId:s};r.indexOf(s)>=0||(l.hot._acceptedDependencies[c]?(n[s]||(n[s]=[]),f(n[s],[c])):(delete n[s],r.push(s),t.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function f(e,r){for(var n=0;n<r.length;n++){var t=r[n];e.indexOf(t)<0&&e.push(t)}}r=r||{};var y={},b=[],w={},m=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var _ in h)if(Object.prototype.hasOwnProperty.call(h,_)){var E;s=O(_);var j=!1,D=!1,I=!1,k="";switch((E=h[_]?l(s):{type:"disposed",moduleId:_}).chain&&(k="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":r.onDeclined&&r.onDeclined(E),r.ignoreDeclined||(j=new Error("Aborted because of self decline: "+E.moduleId+k));break;case"declined":r.onDeclined&&r.onDeclined(E),r.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+k));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(E),r.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+k));break;case"accepted":r.onAccepted&&r.onAccepted(E),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(E),I=!0;break;default:throw new Error("Unexception type "+E.type)}if(j)return u("abort"),Promise.reject(j);if(D)for(s in w[s]=h[s],f(b,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,s)&&(y[s]||(y[s]=[]),f(y[s],E.outdatedDependencies[s]));I&&(f(b,[E.moduleId]),w[s]=m)}var A,M=[];for(t=0;t<b.length;t++)s=b[t],x[s]&&x[s].hot._selfAccepted&&M.push({module:s,errorHandler:x[s].hot._selfAccepted});u("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete P[e]}(e)});for(var T,U,q=b.slice();q.length>0;)if(s=q.pop(),i=x[s]){var N={},L=i.hot._disposeHandlers;for(o=0;o<L.length;o++)(n=L[o])(N);for(a[s]=N,i.hot.active=!1,delete x[s],delete y[s],o=0;o<i.children.length;o++){var R=x[i.children[o]];R&&((A=R.parents.indexOf(s))>=0&&R.parents.splice(A,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(i=x[s]))for(U=y[s],o=0;o<U.length;o++)T=U[o],(A=i.children.indexOf(T))>=0&&i.children.splice(A,1);for(s in u("apply"),c=v,w)Object.prototype.hasOwnProperty.call(w,s)&&(e[s]=w[s]);var S=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(i=x[s])){U=y[s];var J=[];for(t=0;t<U.length;t++)if(T=U[t],n=i.hot._acceptedDependencies[T]){if(J.indexOf(n)>=0)continue;J.push(n)}for(t=0;t<J.length;t++){n=J[t];try{n(U)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:s,dependencyId:U[t],error:e}),r.ignoreErrored||S||(S=e)}}}for(t=0;t<M.length;t++){var B=M[t];s=B.module,d=[s];try{H(s)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,orginalError:e,originalError:e}),r.ignoreErrored||S||(S=n),S||(S=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:s,error:e}),r.ignoreErrored||S||(S=e)}}return S?(u("fail"),Promise.reject(S)):(u("idle"),new Promise(function(e){e(b)}))}var x={},P={15:0};function H(r){if(x[r])return x[r].exports;var n=x[r]={i:r,l:!1,exports:{},hot:function(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:_,apply:D,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var r=l.indexOf(e);r>=0&&l.splice(r,1)},data:a[e]};return t=void 0,r}(r),parents:(s=d,d=[],s),children:[]};return e[r].call(n.exports,n,n.exports,function(e){var r=x[e];if(!r)return H;var n=function(n){return r.hot.active?(x[n]?x[n].parents.indexOf(e)<0&&x[n].parents.push(e):(d=[e],t=n),r.children.indexOf(n)<0&&r.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),H(n)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(r){H[e]=r}}};for(var c in H)Object.prototype.hasOwnProperty.call(H,c)&&"e"!==c&&Object.defineProperty(n,c,o(c));return n.e=function(e){return"ready"===p&&u("prepare"),b++,H.e(e).then(r,function(e){throw r(),e});function r(){b--,"prepare"===p&&(w[e]||E(e),0===b&&0===y&&j())}},n}(r)),n.l=!0,n.exports}H.e=function(e){var r=P[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var n=new Promise(function(n,t){r=P[e]=[n,t]});r[2]=n;var t=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.timeout=12e4,H.nc&&o.setAttribute("nonce",H.nc),o.src=H.p+"js/"+({0:"vip",1:"detail",2:"guestbook",3:"webTemplate",4:"search",5:"learn",6:"userNotice",7:"index",8:"video",9:"about",10:"userInfo",11:"sayList",12:"error"}[e]||e)+"."+{0:"0e17b251",1:"717f15c8",2:"afa13a58",3:"0278495d",4:"740392f5",5:"3ab8b688",6:"7fa2b7a1",7:"d4cd5375",8:"bc55b114",9:"b5a6a47c",10:"bb4b1b80",11:"c93264e2",12:"1a2e0f89"}[e]+".js";var c=setTimeout(i,12e4);function i(){o.onerror=o.onload=null,clearTimeout(c);var r=P[e];0!==r&&(r&&r[1](new Error("Loading chunk "+e+" failed.")),P[e]=void 0)}return o.onerror=o.onload=i,t.appendChild(o),n},H.m=e,H.c=x,H.d=function(e,r,n){H.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},H.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(r,"a",r),r},H.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},H.p="//cdn.duanliang920.com/assets/web/",H.oe=function(e){throw console.error(e),e},H.h=function(){return c}}([]);
//# sourceMappingURL=manifest.b040db9c.js.map