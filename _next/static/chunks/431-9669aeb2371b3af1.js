(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{8030:function(e,t,n){"use strict";var r,o;n.r(t),n.d(t,{DataContext:function(){return w},DataCtxReader:function(){return A},DataProvider:function(){return k},PageParamsProvider:function(){return T},PlasmicCanvasContext:function(){return h},PlasmicCanvasHost:function(){return _},applySelector:function(){return x},mkMetaName:function(){return R},mkMetaValue:function(){return j},registerComponent:function(){return U},registerGlobalContext:function(){return H},registerTrait:function(){return G},repeatedElement:function(){return B},unstable_registerFetcher:function(){return I},useDataEnv:function(){return L},usePlasmicCanvasContext:function(){return b},useSelector:function(){return S},useSelectors:function(){return M}});var a=n(7294),u=n(3935);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=globalThis;null==f.__PlasmicHostVersion&&(f.__PlasmicHostVersion="2");var d=[],p=new function(e){var t=this;this.value=e,this.set=function(e){t.value=e,d.forEach((function(e){return e()}))},this.get=function(){return t.value}}(null);function m(){return function(e,t){if(void 0===t&&(t=""),null===e||void 0===e)throw t=(function(e){return"string"===typeof e}(t)?t:t())||"",new Error("Value must not be undefined or null"+(t?"- "+t:""));return e}(new URL("https://fakeurl/"+location.hash.replace(/#/,"?")).searchParams.get("origin"),"Missing information from Plasmic window.")}var v=0;function y(e){v++,p.set(e)}var h=(0,a.createContext)(!1),b=function(){return(0,a.useContext)(h)};function g(){var e,t,n=!!window.parent,r=!(null==(e=location.hash)||!e.match(/\bcanvas=true\b/)),o=!(null==(t=location.hash)||!t.match(/\blive=true\b/))||!n,i=n&&!document.querySelector("#plasmic-studio-tag")&&!r&&!o,c=function(){var e=(0,a.useState)(0)[1];return(0,a.useCallback)((function(){e((function(e){return e+1}))}),[])}();if((0,a.useLayoutEffect)((function(){return d.push(c),function(){var e=d.indexOf(c);e>=0&&d.splice(e,1)}}),[c]),(0,a.useEffect)((function(){i&&n&&window.parent!==window&&function(){var e=document.createElement("script"),t=m();e.src=t+"/static/js/studio.js",document.body.appendChild(e)}()}),[i,n]),(0,a.useEffect)((function(){if(!i&&!document.querySelector("#getlibs")&&o){var e=document.createElement("script");e.id="getlibs",e.src=m()+"/static/js/getlibs.js",e.async=!1,e.onload=function(){null==window.__GetlibsReadyResolver||window.__GetlibsReadyResolver()},document.head.append(e)}}),[i]),!n)return null;if(r||o){var l=document.querySelector("#plasmic-app.__wab_user-body");l||((l=document.createElement("div")).id="plasmic-app",l.classList.add("__wab_user-body"),document.body.appendChild(l));var s=new URLSearchParams(location.hash),f=!!r&&{componentName:s.get("componentName")};return(0,u.createPortal)((0,a.createElement)(E,{key:""+v},(0,a.createElement)(h.Provider,{value:f},p.get())),l,"plasmic-app")}return i&&window.parent===window?(0,a.createElement)("iframe",{src:"https://docs.plasmic.app/app-content/app-host-ready#appHostUrl="+encodeURIComponent(location.href),style:{width:"100vw",height:"100vh",border:"none",position:"fixed",top:0,left:0,zIndex:99999999}}):null}var _=function(e){var t=e.enableWebpackHmr,n=(0,a.useState)(null),r=n[0],o=n[1];return(0,a.useEffect)((function(){o((0,a.createElement)(g,null))}),[]),(0,a.createElement)(a.Fragment,null,!t&&(0,a.createElement)(O,null),r)},C=[];function P(e){return C.push(e),function(){var t=C.indexOf(e);t>=0&&C.splice(t,1)}}var E=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,c(t,n),r.getDerivedStateFromError=function(e){return{error:e}};var o=r.prototype;return o.componentDidCatch=function(e){C.forEach((function(t){return t(e)}))},o.render=function(){return this.state.error?(0,a.createElement)("div",null,"Error: ",""+this.state.error.message):(0,a.createElement)(a.Fragment,null,this.props.children)},r}(a.Component);function O(){return null}var w=(0,a.createContext)(void 0);function R(e){return"__plasmic_meta_"+e}function j(e){return e}function x(e,t){if(t){for(var n,r=e,o=s(t.split("."));!(n=o()).done;){var a,u=n.value;r=null==(a=r)?void 0:a[u]}return r}}function S(e){return x(L(),e)}function M(e){void 0===e&&(e={});var t=L();return Object.fromEntries(Object.entries(e).filter((function(e){var t=e[0],n=e[1];return!!t&&!!n})).map((function(e){var n=e[0],r=e[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}(n,x(t,r))})))}function L(){return(0,a.useContext)(w)}function k(e){var t,n,r=e.name,o=e.data,u=e.hidden,c=e.label,l=e.children,s=null!=(t=L())?t:{};return r?a.createElement(w.Provider,{value:i({},s,(n={},n[r]=o,n[R(r)]={hidden:u,label:c},n))},l):a.createElement(a.Fragment,null,l)}function T(e){var t=e.children,n=e.params,r=void 0===n?{}:n,o=e.query,u=void 0===o?{}:o,c=L()||{};return a.createElement(k,{name:"params",data:i({},c.params,r),label:"Page route params"},a.createElement(k,{name:"query",data:i({},c.query,u),label:"Page query params"},t))}function A(e){return(0,e.children)(L())}var D=globalThis;function I(e,t){D.__PlasmicFetcherRegistry.push({fetcher:e,meta:t})}D.__PlasmicFetcherRegistry=[];var Z=globalThis;function U(e,t){Z.__PlasmicComponentRegistry.push({component:e,meta:t})}null==Z.__PlasmicComponentRegistry&&(Z.__PlasmicComponentRegistry=[]);var F=globalThis;function H(e,t){F.__PlasmicContextRegistry.push({component:e,meta:t})}null==F.__PlasmicContextRegistry&&(F.__PlasmicContextRegistry=[]);var N,q,V=globalThis;function G(e,t){V.__PlasmicTraitRegistry.push({trait:e,meta:t})}function B(e,t){return K(e,t)}null==V.__PlasmicTraitRegistry&&(V.__PlasmicTraitRegistry=[]);var K=function(e,t){return Array.isArray(t)?t.map((function(t){return K(e,t)})):t&&(0,a.isValidElement)(t)&&"string"!==typeof t?(0,a.cloneElement)(t):t},z=globalThis,$=null!=(N=null==z||null==(q=z.__Sub)?void 0:q.setRepeatedElementFn)?N:function(e){K=e},W={__proto__:null,PlasmicCanvasContext:h,PlasmicCanvasHost:_,usePlasmicCanvasContext:b,unstable_registerFetcher:I,registerComponent:U,registerGlobalContext:H,registerTrait:G,repeatedElement:B,DataContext:w,mkMetaName:R,mkMetaValue:j,applySelector:x,useSelector:S,useSelectors:M,useDataEnv:L,DataProvider:k,PageParamsProvider:T,DataCtxReader:A},J=globalThis;null==J.__Sub&&(J.__Sub=i({React:r||(r=n.t(a,2)),ReactDOM:o||(o=n.t(u,2)),hostModule:W,hostVersion:"1.0.73",hostUtils:{setPlasmicRootNode:y,registerRenderErrorListener:P,setRepeatedElementFn:$},setPlasmicRootNode:y,registerRenderErrorListener:P,setRepeatedElementFn:$},W))},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,a=n(7273).Z,u=o(n(7294)),i=n(6273),c=n(2725),l=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),m="undefined"!==typeof u.default.useTransition,v={};function y(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var h=u.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,b=e.children,g=e.prefetch,_=e.passHref,C=e.replace,P=e.soft,E=e.shallow,O=e.scroll,w=e.locale,R=e.onClick,j=e.onMouseEnter,x=e.onTouchStart,S=e.legacyBehavior,M=void 0===S?!0!==Boolean(!1):S,L=a(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,!M||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var k=!1!==g,T=r(m?u.default.useTransition():[],2)[1],A=u.default.useContext(l.RouterContext),D=u.default.useContext(s.AppRouterContext);D&&(A=D);var I,Z=u.default.useMemo((function(){var e=r(i.resolveHref(A,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?i.resolveHref(A,h):n||t}}),[A,o,h]),U=Z.href,F=Z.as,H=u.default.useRef(U),N=u.default.useRef(F);M&&(I=u.default.Children.only(n));var q=M?I&&"object"===typeof I&&I.ref:t,V=r(f.useIntersection({rootMargin:"200px"}),3),G=V[0],B=V[1],K=V[2],z=u.default.useCallback((function(e){N.current===F&&H.current===U||(K(),N.current=F,H.current=U),G(e),q&&("function"===typeof q?q(e):"object"===typeof q&&(q.current=e))}),[F,q,U,K,G]);u.default.useEffect((function(){var e=B&&k&&i.isLocalURL(U),t="undefined"!==typeof w?w:A&&A.locale,n=v[U+"%"+F+(t?"%"+t:"")];e&&!n&&y(A,U,F,{locale:t})}),[F,U,B,w,k,A]);var $={ref:z,onClick:function(e){M||"function"!==typeof R||R(e),M&&I.props&&"function"===typeof I.props.onClick&&I.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c,l,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n)){e.preventDefault();var f=function(){"softPush"in t&&"softReplace"in t?t[a?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:u,locale:l,scroll:c})};s?s(f):f()}}(e,A,U,F,C,P,E,O,w,D?T:void 0)},onMouseEnter:function(e){M||"function"!==typeof j||j(e),M&&I.props&&"function"===typeof I.props.onMouseEnter&&I.props.onMouseEnter(e),i.isLocalURL(U)&&y(A,U,F,{priority:!0})},onTouchStart:function(e){M||"function"!==typeof x||x(e),M&&I.props&&"function"===typeof I.props.onTouchStart&&I.props.onTouchStart(e),i.isLocalURL(U)&&y(A,U,F,{priority:!0})}};if(!M||_||"a"===I.type&&!("href"in I.props)){var W="undefined"!==typeof w?w:A&&A.locale,J=A&&A.isLocaleDomain&&d.getDomainLocale(F,W,A.locales,A.domainLocales);$.href=J||p.addBasePath(c.addLocale(F,W,A&&A.defaultLocale))}return M?u.default.cloneElement(I,$):u.default.createElement("a",Object.assign({},L,$),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!u,s=o.useRef(),f=r(o.useState(!1),2),d=f[0],p=f[1],m=r(o.useState(null),2),v=m[0],y=m[1];o.useEffect((function(){if(u){if(s.current&&(s.current(),s.current=void 0),l||d)return;return v&&v.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=i.get(r)))return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:o},c.push(n),i.set(n,t),t}(n),o=r.id,a=r.observer,u=r.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),i.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[v,l,n,t,d]);var h=o.useCallback((function(){p(!1)}),[]);return[y,d,h]};var o=n(7294),a=n(9311),u="function"===typeof IntersectionObserver;var i=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var a=r.default.createContext(null);t.LayoutRouterContext=a;var u=r.default.createContext(null);t.GlobalLayoutRouterContext=u},7575:function(){},1664:function(e,t,n){e.exports=n(8418)},943:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},3375:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},9815:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(943);var o=n(3375);var a=n(1566);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,o.Z)(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(943);function o(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);