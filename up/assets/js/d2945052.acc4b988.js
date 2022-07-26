"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[91475],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(n),g=a,y=f["".concat(u,".").concat(g)]||f[g]||p[g]||o;return n?t.createElement(y,c(c({ref:r},s),{},{components:n})):t.createElement(y,c({ref:r},s))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13956:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={sidebar_position:103},u="anyHeavy",l={unversionedId:"ru/sql-reference/aggregate-functions/reference/anyheavy",id:"ru/sql-reference/aggregate-functions/reference/anyheavy",title:"anyHeavy",description:"anyheavyx}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/anyheavy.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/anyheavy",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/anyheavy",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/anyheavy.md",tags:[],version:"current",sidebarPosition:103,frontMatter:{sidebar_position:103},sidebar:"russia",previous:{title:"covarSamp",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/covarsamp"},next:{title:"anylast",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/anylast"}},s={},p=[],f={toc:p};function g(e){var r=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anyheavyx"},"anyHeavy"),(0,o.kt)("p",null,"\u0412\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0449\u0435\u0435\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \xab",(0,o.kt)("a",{parentName:"p",href:"http://www.cs.umd.edu/~samir/498/karp.pdf"},"heavy hitters"),"\xbb. \u0415\u0441\u043b\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044f \u0447\u0430\u0449\u0435, \u0447\u0435\u043c \u0432 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u043f\u043e\u0442\u043e\u043a\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u0412 \u043e\u0431\u0449\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0435\u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"anyHeavy(column)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"column")," \u2014 \u0438\u043c\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0412\u043e\u0437\u044c\u043c\u0451\u043c \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/getting-started/example-datasets/ontime"},"OnTime")," \u0438 \u0432\u044b\u0431\u0435\u0440\u0435\u043c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0447\u0430\u0441\u0442\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0449\u0435\u0435\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"AirlineID"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT anyHeavy(AirlineID) AS res\nFROM ontime\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500res\u2500\u2510\n\u2502 19690 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);