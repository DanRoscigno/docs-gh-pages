"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85982],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=p(r),f=a,d=g["".concat(c,".").concat(f)]||g[f]||s[f]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},76247:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],u={sidebar_position:109},c="topKWeighted",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/topkweighted",id:"ru/sql-reference/aggregate-functions/reference/topkweighted",title:"topKWeighted",description:"topkweighted}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/topkweighted.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/topkweighted",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/topkweighted",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/topkweighted.md",tags:[],version:"current",sidebarPosition:109,frontMatter:{sidebar_position:109},sidebar:"russia",previous:{title:"topK",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/topk"},next:{title:"groupArray",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/grouparray"}},l={},s=[],g={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"topkweighted"},"topKWeighted"),(0,o.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0447\u0430\u0441\u0442\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u0435. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0447\u0430\u0441\u0442\u043e\u0442\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (\u043d\u0435 \u043f\u043e \u0441\u0430\u043c\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c). \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u0435\u0441 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"topKWeighted(N)(x, weight)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"N")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u0432\u044b\u0434\u0430\u0447\u0438."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"weight")," \u2014 \u0432\u0435\u0441. \u041a\u0430\u0436\u0434\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,o.kt)("inlineCode",{parentName:"li"},"weight")," \u0440\u0430\u0437 \u043f\u0440\u0438 \u0440\u0430\u0441\u0447\u0451\u0442\u0435 \u0447\u0430\u0441\u0442\u043e\u0442\u044b. ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,o.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0435\u043d\u043d\u043e\u0439 \u0441\u0443\u043c\u043c\u043e\u0439 \u0432\u0435\u0441\u043e\u0432."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT topKWeighted(10)(number, number) FROM numbers(1000)\n")),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500topKWeighted(10)(number, number)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [999,998,997,996,995,994,993,992,991,990] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/topk"},"topK"))))}f.isMDXComponent=!0}}]);