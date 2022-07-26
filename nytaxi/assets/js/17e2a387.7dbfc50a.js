"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97315],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||s;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={},c="system.functions",u={unversionedId:"zh/operations/system-tables/functions",id:"zh/operations/system-tables/functions",title:"system.functions",description:"system-functions}",source:"@site/docs/zh/operations/system-tables/functions.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/functions",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/functions",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002\u6d3b\u52a8",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/events"},next:{title:"system.grants",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/grants"}},l={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-functions"},"system.functions"),(0,s.kt)("p",null,"\u5305\u542b\u6709\u5173\u5e38\u89c4\u51fd\u6570\u548c\u805a\u5408\u51fd\u6570\u7684\u4fe1\u606f\u3002"),(0,s.kt)("p",null,"\u5217:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"name"),"(",(0,s.kt)("inlineCode",{parentName:"li"},"String"),") \u2013 The name of the function."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"is_aggregate"),"(",(0,s.kt)("inlineCode",{parentName:"li"},"UInt8"),") \u2014 Whether the function is aggregate.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u4e3e\u4f8b")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," SELECT * FROM system.functions LIMIT 10;\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500is_aggregate\u2500\u252c\u2500case_insensitive\u2500\u252c\u2500alias_to\u2500\u2510\n\u2502 sumburConsistentHash     \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 kostikConsistentHash     \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 demangle                 \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 addressToLine            \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractRaw           \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractKeysAndValues \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtract              \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractString        \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractFloat         \u2502            0 \u2502                0 \u2502          \u2502\n\u2502 JSONExtractInt           \u2502            0 \u2502                0 \u2502          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n10 rows in set. Elapsed: 0.002 sec.\n")))}m.isMDXComponent=!0}}]);