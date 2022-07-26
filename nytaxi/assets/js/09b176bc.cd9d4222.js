"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18354],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,g=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?t.createElement(g,c(c({ref:n},l),{},{components:r})):t.createElement(g,c({ref:n},l))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72749:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={sidebar_position:143},u="maxMap",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/maxmap",id:"ru/sql-reference/aggregate-functions/reference/maxmap",title:"maxMap",description:"agg_functions-maxmap}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/maxmap.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/maxmap",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/maxmap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/maxmap.md",tags:[],version:"current",sidebarPosition:143,frontMatter:{sidebar_position:143},sidebar:"russia",previous:{title:"minMap",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/minmap"},next:{title:"sumCount",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/aggregate-functions/reference/sumcount"}},l={},s=[],f={toc:s};function m(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_functions-maxmap"},"maxMap"),(0,o.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441: ",(0,o.kt)("inlineCode",{parentName:"p"},"maxMap(key, value)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"maxMap(Tuple(key, value))")),(0,o.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u0430 ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),", \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043a\u043b\u044e\u0447\u0430\u043c, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),"."),(0,o.kt)("p",null,"\u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u043a\u043e\u0440\u0442\u0435\u0436\u0430 \u043a\u043b\u044e\u0447\u0435\u0439 \u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u0434\u0432\u0443\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u043a\u043b\u044e\u0447\u0435\u0439 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,o.kt)("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u0435\u043c\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,o.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u0440\u0442\u0435\u0436 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432: \u043a\u043b\u044e\u0447\u0438 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u043d\u044b\u0435 \u0434\u043b\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043a\u043b\u044e\u0447\u0435\u0439."),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT maxMap(a, b)\nFROM values('a Array(Int32), b Array(Int64)', ([1, 2], [2, 2]), ([2, 3], [1, 1]))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500maxMap(a, b)\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ([1,2,3],[2,2,1]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);