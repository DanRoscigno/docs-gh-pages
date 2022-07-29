"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[8905],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(r),g=a,m=f["".concat(c,".").concat(g)]||f[g]||s[g]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33692:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={sidebar_position:108},c="topK",l={unversionedId:"ru/sql-reference/aggregate-functions/reference/topk",id:"ru/sql-reference/aggregate-functions/reference/topk",title:"topK",description:"topk}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/topk.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/topk",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/topk",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/topk.md",tags:[],version:"current",sidebarPosition:108,frontMatter:{sidebar_position:108},sidebar:"russia",previous:{title:"exponentialmovingaverage",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/exponentialmovingaverage"},next:{title:"topKWeighted",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/aggregate-functions/reference/topkweighted"}},u={},s=[],f={toc:s};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"topk"},"topK"),(0,o.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0447\u0430\u0441\u0442\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u0435. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e \u0447\u0430\u0441\u0442\u043e\u0442\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (\u043d\u0435 \u043f\u043e \u0441\u0430\u043c\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c)."),(0,o.kt)("p",null,"\u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 ",(0,o.kt)("a",{parentName:"p",href:"http://www.l2f.inesc-id.pt/~fmmb/wiki/uploads/Work/misnis.ref0a.pdf"},"Filtered Space-Saving")," \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 TopK, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 reduce-and-combine \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u0430 \u0438\u0437 \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0438 ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1401.0702.pdf"},"Parallel Space Saving"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"topK(N)(column)\n")),(0,o.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043d\u0435 \u0434\u0430\u0435\u0442 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430. \u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f\u0445 \u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438, \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u044b\u0435, \u043d\u043e \u043d\u0435 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0447\u0430\u0441\u0442\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."),(0,o.kt)("p",null,"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"N < 10"),", \u043f\u0440\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," \u0441\u043d\u0438\u0436\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c. \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"N = 65536"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"N")," \u2013 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," \u2013 \u0441\u0442\u043e\u043b\u0431\u0435\u0446.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0412\u043e\u0437\u044c\u043c\u0451\u043c \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,o.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/getting-started/example-datasets/ontime"},"OnTime")," \u0438 \u0432\u044b\u0431\u0435\u0440\u0435\u043c 3 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0447\u0430\u0441\u0442\u043e \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044e\u0449\u0438\u0445\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"AirlineID"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT topK(3)(AirlineID) AS res\nFROM ontime\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 [19393,19790,19805] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);