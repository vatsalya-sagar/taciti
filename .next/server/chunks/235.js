exports.id=235,exports.ids=[235],exports.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},6730:(e,t)=>{"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:l}=n;return l?o.innerHTML=l.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&a.push(n)}let s=t.map(o).filter(e=>{for(let t=0,n=a.length;t<n;t++)if(i(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(l-a.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5874:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return _},initScriptLoader:function(){return m},default:function(){return g}});let r=n(167),o=n(8760),i=n(997),l=r._(n(6405)),a=o._(n(6689)),u=n(1988),s=n(6730),c=n(9126),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],y=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:l="",strategy:a="afterInteractive",onError:u,stylesheets:c}=e,h=n||t;if(h&&f.has(h))return;if(d.has(t)){f.add(h),d.get(t).then(r,u);return}let _=()=>{o&&o(),f.add(h)},m=document.createElement("script"),b=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),_()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(i?(m.innerHTML=i.__html||"",_()):l?(m.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",_()):t&&(m.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===a&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",a),c&&y(c),document.body.appendChild(m)};function _(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function m(e){e.forEach(_),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:d,stylesheets:p,...y}=e,{updateScripts:_,scripts:m,getIsSsr:b,appDir:g,nonce:v}=(0,a.useContext)(u.HeadManagerContext),E=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;E.current||(o&&e&&f.has(e)&&o(),E.current=!0)},[o,t,n]);let A=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!A.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),A.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(_?(m[s]=(m[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:d,...y}]),_(m)):b&&b()?f.add(t||n):b&&!b()&&h(e)),g){if(p&&p.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(l.default.preload(n,y.integrity?{as:"script",integrity:y.integrity}:{as:"script"}),(0,i.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...y,id:t}])+")"}})):(y.dangerouslySetInnerHTML&&(y.children=y.dangerouslySetInnerHTML.__html,delete y.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...y,id:t}])+")"}}));"afterInteractive"===s&&n&&l.default.preload(n,y.integrity?{as:"script",integrity:y.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let g=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5244:(e,t)=>{"use strict";var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},4298:(e,t,n)=>{n(5874)}};