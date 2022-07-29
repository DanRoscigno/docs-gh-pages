"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16426],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,p(p({ref:t},u),{},{components:r})):n.createElement(f,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28454:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={},s="EXISTS",c={unversionedId:"ru/sql-reference/operators/exists",id:"ru/sql-reference/operators/exists",title:"EXISTS",description:"exists-operator}",source:"@site/docs/ru/sql-reference/operators/exists.md",sourceDirName:"ru/sql-reference/operators",slug:"/ru/sql-reference/operators/exists",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/operators/exists",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/operators/exists.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/operators/"},next:{title:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b IN",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/operators/in"}},u={},l=[],m={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exists-operator"},"EXISTS"),(0,o.kt)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,o.kt)("inlineCode",{parentName:"p"},"EXISTS")," \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u043e\u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0415\u0441\u043b\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0443\u0441\u0442\u043e\u0439, \u0442\u043e \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),". \u0412 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"EXISTS")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/where"},"WHERE"),"."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"')),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"\u0421\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u0435. \n")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WHERE EXISTS(subquery)\n")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",{parentName:"div"},"\u0417\u0430\u043f\u0440\u043e\u0441 \u0441 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u043c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u043e\u043a:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM numbers(10) WHERE EXISTS(SELECT number FROM numbers(10) WHERE number > 8);\n")),(0,o.kt)("p",{parentName:"div"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502      10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",{parentName:"div"},"\u0417\u0430\u043f\u0440\u043e\u0441 \u0441 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u043c, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u043c \u043f\u0443\u0441\u0442\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT count() FROM numbers(10) WHERE EXISTS(SELECT number FROM numbers(10) WHERE number > 11);\n")),(0,o.kt)("p",{parentName:"div"},"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))))}d.isMDXComponent=!0}}]);