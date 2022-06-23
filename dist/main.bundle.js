(()=>{"use strict";var n={982:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"* {\n  box-sizing: border-box;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n  width: 500px;\n  border: 1px solid #eee;\n  border-radius: 3px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  display: flex;\n  margin-bottom: 20px;\n}\n\nbutton {\n  padding: 5px 15px;\n  border: 0px;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 0 3px;\n  outline: 0;\n}\n\ninput {\n  padding: 8px 15px;\n  outline: 0;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n}\n\nform input {\n  flex: 1;\n  margin-right: 15px;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  padding: 10px 0px;\n}\n\nli input {\n  flex: 1;\n}\n\nli p {\n  flex: 1;\n}\n\nli .todo {\n  flex: 0 0 20px;\n  height: 20px;\n  border-radius: 30px;\n  margin-right: 15px;\n  border: 2px solid #333;\n}\n\nli .todo.done {\n  background: #333;\n}\n","",{version:3,sources:["webpack://./src/style/style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,OAAO;EACP,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:["* {\n  box-sizing: border-box;\n}\n\np {\n  margin: 0;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.container {\n  width: 500px;\n  border: 1px solid #eee;\n  border-radius: 3px;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  display: flex;\n  margin-bottom: 20px;\n}\n\nbutton {\n  padding: 5px 15px;\n  border: 0px;\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 0 3px;\n  outline: 0;\n}\n\ninput {\n  padding: 8px 15px;\n  outline: 0;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n}\n\nform input {\n  flex: 1;\n  margin-right: 15px;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\nli {\n  display: flex;\n  align-items: center;\n  padding: 10px 0px;\n}\n\nli input {\n  flex: 1;\n}\n\nli p {\n  flex: 1;\n}\n\nli .todo {\n  flex: 0 0 20px;\n  height: 20px;\n  border-radius: 30px;\n  margin-right: 15px;\n  border: 2px solid #333;\n}\n\nli .todo.done {\n  background: #333;\n}\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],d=r.base?A[0]+r.base:A[0],s=i[d]||0,p="".concat(d," ").concat(s);i[d]=s+1;var u=t(p),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)e[u].references++,e[u].updater(l);else{var f=o(l,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var A=r(n,o),d=0;d<i.length;d++){var s=t(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=A}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),c=t(565),A=t.n(c),d=t(216),s=t.n(d),p=t(589),u=t.n(p),l=t(982),f={};f.styleTagTransform=u(),f.setAttributes=A(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),e()(l.Z,f),l.Z&&l.Z.locals&&l.Z.locals;var m=document.querySelector("ul"),x=document.querySelector("form"),E=document.querySelector("form > input");x.addEventListener("submit",(function(n){n.preventDefault();var e=E.value;E.value="",B(e)}));var v=[{text:"je suis une todo",done:!1,editMode:!0},{text:"faire du JavaScript",done:!0,editMode:!1}],g=function(){var n=v.map((function(n,e){return n.editMode?C(n,e):b(n,e)}));m.innerHTML="",m.append.apply(m,function(n,e,t){if(t||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}([],function(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var r,o,i=t.call(n),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(n){o={error:n}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a}(n),!1))},b=function(n,e){var t=document.createElement("li"),r=document.createElement("button");r.innerHTML="Supprimer";var o=document.createElement("button");return o.innerHTML="Edit",r.addEventListener("click",(function(n){n.stopPropagation(),y(e)})),o.addEventListener("click",(function(n){n.stopPropagation(),M(e)})),t.innerHTML='\n    <span class="todo '.concat(n.done?"done":"",'"></span>\n    <p>').concat(n.text,"</p>\n  "),t.addEventListener("click",(function(){h(e)})),t.append(o,r),t},C=function(n,e){var t=document.createElement("li"),r=document.createElement("input");r.type="text",r.value=n.text,r.setAttribute("index",e+"");var o=document.createElement("button");o.innerHTML="Save";var i=document.createElement("button");return i.innerHTML="Cancel",i.addEventListener("click",(function(n){n.stopPropagation(),M(e)})),o.addEventListener("click",(function(){S(e,r)})),t.append(r,i,o),t},B=function(n){v.push({text:n,done:!1,editMode:!1}),g()},y=function(n){v.splice(n,1),g()},h=function(n){v[n].done=!v[n].done,g()},M=function(n){v[n].editMode=!v[n].editMode,g()},S=function(n,e){var t=e.value;v[n].text=t,v[n].editMode=!1,g()};g()})()})();
//# sourceMappingURL=main.bundle.js.map