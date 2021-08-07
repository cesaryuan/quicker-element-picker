(()=>{"use strict";class e{constructor(){this.overlay=document.createElement("div"),this.overlay.className="_ext-element-overlay",this.overlay.style.background="rgba(250, 240, 202, 0.2)",this.overlay.style.borderColor="#F95738",this.overlay.style.borderStyle="solid",this.overlay.style.borderRadius="1px",this.overlay.style.borderWidth="1px",this.overlay.style.boxSizing="border-box",this.overlay.style.cursor="crosshair",this.overlay.style.position="absolute",this.overlay.style.zIndex="2147483647",this.shadowContainer=document.createElement("div"),this.shadowContainer.className="_ext-element-overlay-container",this.shadowContainer.style.position="absolute",this.shadowContainer.style.top="0px",this.shadowContainer.style.left="0px",this.shadowRoot=this.shadowContainer.attachShadow({mode:"open"})}addToDOM(e,t){this.usingShadowDOM=t,t?(e.insertBefore(this.shadowContainer,e.firstChild),this.shadowRoot.appendChild(this.overlay)):e.appendChild(this.overlay)}removeFromDOM(){this.setBounds({x:0,y:0,width:0,height:0}),this.overlay.remove(),this.usingShadowDOM&&this.shadowContainer.remove()}captureCursor(){this.overlay.style.pointerEvents="auto"}ignoreCursor(){this.overlay.style.pointerEvents="none"}setBounds({x:e,y:t,width:n,height:o}){this.overlay.style.left=e+"px",this.overlay.style.top=t+"px",this.overlay.style.width=n+"px",this.overlay.style.height=o+"px"}}var t;let n,o;function i(e,i){if(e.nodeType!==Node.ELEMENT_NODE)throw new Error("Can't generate CSS selector for non-element node type.");if("html"===e.tagName.toLowerCase())return"html";const r={root:document.body,idName:e=>!0,className:e=>!0,tagName:e=>!0,attr:(e,t)=>!1,seedMinLength:1,optimizedMinLength:2,threshold:1e3,maxNumberOfTries:1e4};n=Object.assign(Object.assign({},r),i),o=function(e,t){return e.nodeType===Node.DOCUMENT_NODE?e:e===t.root?e.ownerDocument:e}(n.root,r);let a=s(e,t.All,(()=>s(e,t.Two,(()=>s(e,t.One)))));if(a){const t=C(E(a,e));return t.length>0&&(a=t[0]),l(a)}throw new Error("Selector was not found.")}function s(e,o,i){let s=null,l=[],a=e,h=0;for(;a&&a!==n.root.parentElement;){let e=p(u(a))||p(...c(a))||p(...d(a))||p(f(a))||[{name:"*",penalty:3}];const g=m(a);if(o===t.All)g&&(e=e.concat(e.filter(y).map((e=>v(e,g)))));else if(o===t.Two)e=e.slice(0,1),g&&(e=e.concat(e.filter(y).map((e=>v(e,g)))));else if(o===t.One){const[t]=e=e.slice(0,1);g&&y(t)&&(e=[v(t,g)])}for(let t of e)t.level=h;if(l.push(e),l.length>=n.seedMinLength&&(s=r(l,i),s))break;a=a.parentElement,h++}return s||(s=r(l,i)),s}function r(e,t){const o=C(w(e));if(o.length>n.threshold)return t?t():null;for(let e of o)if(h(e))return e;return null}function l(e){let t=e[0],n=t.name;for(let o=1;o<e.length;o++){const i=e[o].level||0;n=t.level===i-1?`${e[o].name} > ${n}`:`${e[o].name} ${n}`,t=e[o]}return n}function a(e){return e.map((e=>e.penalty)).reduce(((e,t)=>e+t),0)}function h(e){switch(o.querySelectorAll(l(e)).length){case 0:throw new Error(`Can't select any node with this selector: ${l(e)}`);case 1:return!0;default:return!1}}function u(e){const t=e.getAttribute("id");return t&&n.idName(t)?{name:"#"+k(t,{isIdentifier:!0}),penalty:0}:null}function c(e){return Array.from(e.attributes).filter((e=>n.attr(e.name,e.value))).map((e=>({name:"["+k(e.name,{isIdentifier:!0})+'="'+k(e.value)+'"]',penalty:.5})))}function d(e){return Array.from(e.classList).filter(n.className).map((e=>({name:"."+k(e,{isIdentifier:!0}),penalty:1})))}function f(e){const t=e.tagName.toLowerCase();return n.tagName(t)?{name:t,penalty:2}:null}function m(e){const t=e.parentNode;if(!t)return null;let n=t.firstChild;if(!n)return null;let o=0;for(;n&&(n.nodeType===Node.ELEMENT_NODE&&o++,n!==e);)n=n.nextSibling;return o}function v(e,t){return{name:e.name+`:nth-child(${t})`,penalty:e.penalty+1}}function y(e){return"html"!==e.name&&!e.name.startsWith("#")}function p(...e){const t=e.filter(g);return t.length>0?t:null}function g(e){return null!=e}function*w(e,t=[]){if(e.length>0)for(let n of e[0])yield*w(e.slice(1,e.length),t.concat(n));else yield t}function C(e){return Array.from(e).sort(((e,t)=>a(e)-a(t)))}function*E(e,t,o={counter:0,visited:new Map}){if(e.length>2&&e.length>n.optimizedMinLength)for(let i=1;i<e.length-1;i++){if(o.counter>n.maxNumberOfTries)return;o.counter+=1;const s=[...e];s.splice(i,1);const r=l(s);if(o.visited.has(r))return;h(s)&&b(s,t)&&(yield s,o.visited.set(r,!0),yield*E(s,t,o))}}function b(e,t){return o.querySelector(l(e))===t}!function(e){e[e.All=0]="All",e[e.Two=1]="Two",e[e.One=2]="One"}(t||(t={}));const x=/[ -,\.\/:-@\[-\^`\{-~]/,O=/[ -,\.\/:-@\[\]\^`\{-~]/,N=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,M={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1};function k(e,t={}){const n=Object.assign(Object.assign({},M),t);"single"!=n.quotes&&"double"!=n.quotes&&(n.quotes="single");const o="double"==n.quotes?'"':"'",i=n.isIdentifier,s=e.charAt(0);let r="",l=0;const a=e.length;for(;l<a;){const t=e.charAt(l++);let s,h=t.charCodeAt(0);if(h<32||h>126){if(h>=55296&&h<=56319&&l<a){const t=e.charCodeAt(l++);56320==(64512&t)?h=((1023&h)<<10)+(1023&t)+65536:l--}s="\\"+h.toString(16).toUpperCase()+" "}else s=n.escapeEverything?x.test(t)?"\\"+t:"\\"+h.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(t)?"\\"+h.toString(16).toUpperCase()+" ":"\\"==t||!i&&('"'==t&&o==t||"'"==t&&o==t)||i&&O.test(t)?"\\"+t:t;r+=s}return i&&(/^-[-\d]/.test(r)?r="\\-"+r.slice(1):/\d/.test(s)&&(r="\\3"+s+" "+r.slice(1))),r=r.replace(N,(function(e,t,n){return t&&t.length%2?e:(t||"")+n})),!i&&n.wrap?o+r+o:r}window._QResult={};var A=new class{constructor(){this.handleMouseMove=e=>{this.mouseX=e.clientX,this.mouseY=e.clientY},this.handleClick=e=>{var t;this.target&&(null===(t=this.options)||void 0===t?void 0:t.onClick)&&this.options.onClick(this.target),e.preventDefault()},this.tick=()=>{this.updateTarget(),this.tickReq=window.requestAnimationFrame(this.tick)},this.active=!1,this.overlay=new e}start(e){var t,n;return!this.active&&(this.active=!0,this.options=e,document.addEventListener("mousemove",this.handleMouseMove,!0),document.addEventListener("click",this.handleClick,!0),this.overlay.addToDOM(null!==(t=e.parentElement)&&void 0!==t?t:document.body,null===(n=e.useShadowDOM)||void 0===n||n),this.tick(),!0)}stop(){this.active=!1,this.options=void 0,document.removeEventListener("mousemove",this.handleMouseMove,!0),document.removeEventListener("click",this.handleClick,!0),this.overlay.removeFromDOM(),this.target=void 0,this.mouseX=void 0,this.mouseY=void 0,this.tickReq&&window.cancelAnimationFrame(this.tickReq)}updateTarget(){var e,t;if(void 0===this.mouseX||void 0===this.mouseY)return;this.overlay.ignoreCursor();const n=document.elementFromPoint(this.mouseX,this.mouseY);if(this.overlay.captureCursor(),!n||n===this.target)return;if((null===(e=this.options)||void 0===e?void 0:e.elementFilter)&&!this.options.elementFilter(n))return this.target=void 0,void this.overlay.setBounds({x:0,y:0,width:0,height:0});this.target=n;const o=(e=>{const t=e.getBoundingClientRect();return{x:window.pageXOffset+t.left,y:window.pageYOffset+t.top,width:e.offsetWidth,height:e.offsetHeight}})(n);this.overlay.setBounds(o),(null===(t=this.options)||void 0===t?void 0:t.onHover)&&this.options.onHover(n)}};A.start({onClick:function(e){A.stop(),window._QResult.css=i(e),console.log("Picked: ".concat(e))}})})();