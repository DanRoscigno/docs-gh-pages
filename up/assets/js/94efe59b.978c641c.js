"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28205],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=c(n),f=a,d=g["".concat(p,".").concat(f)]||g[f]||s[f]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:107},p="avgWeighted",c={unversionedId:"zh/sql-reference/aggregate-functions/reference/avgweighted",id:"zh/sql-reference/aggregate-functions/reference/avgweighted",title:"avgWeighted",description:"avgweighted}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/avgweighted.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/avgweighted",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/avgweighted",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/avgweighted.md",tags:[],version:"current",sidebarPosition:107,frontMatter:{sidebar_position:107},sidebar:"chinese",previous:{title:"argMax",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/argmax"},next:{title:"corr",permalink:"/docs-gh-pages/up/zh/sql-reference/aggregate-functions/reference/corr"}},u={},s=[],g={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"avgweighted"},"avgWeighted"),(0,l.kt)("p",null,"\u8ba1\u7b97 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Weighted_arithmetic_mean"},"\u52a0\u6743\u7b97\u672f\u5e73\u5747\u503c"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"avgWeighted(x, weight)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 \u503c\u7684\u52a0\u6743\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"x")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"weight")," \u7684\u7c7b\u578b\u5fc5\u987b\u662f\n",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"\u6574\u6570"),", \u6216\n",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/data-types/float"},"\u6d6e\u70b9\u6570"),", \u6216\n",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/data-types/decimal"},"\u5b9a\u70b9\u6570"),",\n\u4f46\u662f\u53ef\u4ee5\u4e0d\u4e00\u6837\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NaN"),"\u3002 \u5982\u679c\u6240\u6709\u7684\u6743\u91cd\u90fd\u7b49\u4e8e0 \u6216\u6240\u63d0\u4f9b\u7684\u6743\u91cd\u53c2\u6570\u662f\u7a7a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u52a0\u6743\u5e73\u5747\u503c\u3002 \u5176\u4ed6\u3002")),(0,l.kt)("p",null,"\u7c7b\u578b: \u603b\u662f",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avgWeighted(x, w)\nFROM values('x Int8, w Int8', (4, 1), (1, 0), (10, 2))\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avgWeighted(x, weight)\u2500\u2510\n\u2502                      8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avgWeighted(x, w)\nFROM values('x Int8, w Int8', (0, 0), (1, 0), (10, 0))\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avgWeighted(x, weight)\u2500\u2510\n\u2502                    nan \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("p",null,"\u67e5\u8be2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE table test (t UInt8) ENGINE = Memory;\nSELECT avgWeighted(t) FROM test\n")),(0,l.kt)("p",null,"\u7ed3\u679c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500avgWeighted(x, weight)\u2500\u2510\n\u2502                    nan \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);