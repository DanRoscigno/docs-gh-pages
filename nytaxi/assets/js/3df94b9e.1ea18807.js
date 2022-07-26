"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29861],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return r?t.createElement(g,c(c({ref:n},l),{},{components:r})):t.createElement(g,c({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},42372:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={sidebar_position:36},p="covarPop",s={unversionedId:"en/sql-reference/aggregate-functions/reference/covarpop",id:"en/sql-reference/aggregate-functions/reference/covarpop",title:"covarPop",description:"Syntax: covarPop(x, y)",source:"@site/docs/en/sql-reference/aggregate-functions/reference/covarpop.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/covarpop",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/covarpop",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/covarpop.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"english",previous:{title:"varSamp",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/varsamp"},next:{title:"covarSamp",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/covarsamp"}},l={},u=[],f={toc:u};function m(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"covarpop"},"covarPop"),(0,o.kt)("p",null,"Syntax: ",(0,o.kt)("inlineCode",{parentName:"p"},"covarPop(x, y)")),(0,o.kt)("p",null,"Calculates the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"\u03a3((x - x\u0305)(y - y\u0305)) / n"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This function uses a numerically unstable algorithm. If you need ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Numerical_stability"},"numerical stability")," in calculations, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"covarPopStable")," function. It works slower but provides a lower computational error."))))}m.isMDXComponent=!0}}]);