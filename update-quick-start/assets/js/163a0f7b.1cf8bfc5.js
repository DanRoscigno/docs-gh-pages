"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[42400],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=o(n),k=r,d=c["".concat(s,".").concat(k)]||c[k]||u[k]||l;return n?a.createElement(d,p(p({ref:t},m),{},{components:n})):a.createElement(d,p({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44308:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),p=["components"],i={sidebar_label:"SAMPLE"},s="\u0421\u0435\u043a\u0446\u0438\u044f SAMPLE",o={unversionedId:"ru/sql-reference/statements/select/sample",id:"ru/sql-reference/statements/select/sample",title:"\u0421\u0435\u043a\u0446\u0438\u044f SAMPLE",description:"select-sample-clause}",source:"@site/docs/ru/sql-reference/statements/select/sample.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/sample",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/sample",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/select/sample.md",tags:[],version:"current",frontMatter:{sidebar_label:"SAMPLE"},sidebar:"russia",previous:{title:"PREWHERE",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/prewhere"},next:{title:"UNION",permalink:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/union"}},m={},u=[{value:"SAMPLE k",id:"select-sample-k",level:2},{value:"SAMPLE n",id:"select-sample-n",level:2},{value:"SAMPLE k OFFSET m",id:"select-sample-offset",level:2}],c={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-sample-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f SAMPLE"),(0,l.kt)("p",null,"\u0421\u0435\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0451\u043d\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u043f\u043e \u0432\u0441\u0435\u043c \u0432\u0438\u0437\u0438\u0442\u0430\u043c, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c 1/10 \u0432\u0441\u0435\u0445 \u0432\u0438\u0437\u0438\u0442\u043e\u0432 \u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0434\u043e\u043c\u043d\u043e\u0436\u0438\u0442\u044c \u043d\u0430 10."),(0,l.kt)("p",null,"\u0421\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b, \u043a\u043e\u0433\u0434\u0430:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u043d\u0435 \u0432\u0430\u0436\u043d\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u043e\u0446\u0435\u043d\u043e\u0447\u043d\u044b\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u0433\u0438\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u0440\u0435\u043c\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \\","<","100 \u043c\u0441. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u043d\u0438\u0437\u043a\u0438\u0439 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u0422\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0431\u0438\u0437\u043d\u0435\u0441-\u043c\u043e\u0434\u0435\u043b\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u043e\u0439 \u043d\u0430 \u0441\u0435\u0440\u0432\u0438\u0441 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043e\u0442\u0447\u0435\u0442\u044b \u0441 \u043c\u0435\u043d\u044c\u0448\u0435\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e, \u0447\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0441 \u043f\u0440\u0435\u043c\u0438\u0443\u043c \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u043e\u0439."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},':::note "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"\n\u041d\u0435 \u0441\u0442\u043e\u0438\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0442\u0435\u0445 \u0437\u0430\u0434\u0430\u0447\u0430\u0445, \u0433\u0434\u0435 \u0432\u0430\u0436\u043d\u0430 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u043c\u0438 \u043e\u0442\u0447\u0435\u0442\u0430\u043c\u0438.\n:::\n')),(0,l.kt)("p",{parentName:"li"},"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f:"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0421\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e. \u041f\u0440\u0438 \u043c\u043d\u043e\u0433\u043e\u043a\u0440\u0430\u0442\u043d\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u0442\u043e\u0433\u043e \u0436\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT .. SAMPLE"),", \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c."),(0,l.kt)("li",{parentName:"ul"},"\u0421\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043d\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446. \u0418\u043c\u0435\u0435\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043e \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438 \u0442\u0435\u043c \u0436\u0435 \u043a\u043b\u044e\u0447\u043e\u043c \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0430\u0445 \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c (\u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0439 \u0434\u043e\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0445). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u043f\u043e \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0430\u043c \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0435\u0439 \u0432\u044b\u0431\u0435\u0440\u0435\u0442 \u0438\u0437 \u0440\u0430\u0437\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u0432\u0441\u0435\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0445 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432. \u042d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0432 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/operators/in#select-in-operators"},"IN"),", \u0430 \u0442\u0430\u043a\u0436\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/statements/select/join#select-join"},"JOIN"),"."),(0,l.kt)("li",{parentName:"ul"},"\u0421\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0434\u0438\u0441\u043a\u0430. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u043b\u044e\u0447 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b MergeTree"),".")),(0,l.kt)("p",null,"\u0421\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"MergeTree")," \u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0431\u044b\u043b \u0443\u043a\u0430\u0437\u0430\u043d \u043a\u043b\u044e\u0447 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f (\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0430). \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 MergeTree"),"."),(0,l.kt)("p",null,"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE")," \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0421\u043f\u043e\u0441\u043e\u0431\xa0\u0437\u0430\u0434\u0430\u043d\u0438\u044f\xa0SAMPLE"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE k")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0417\u0434\u0435\u0441\u044c ",(0,l.kt)("inlineCode",{parentName:"td"},"k")," \u2013 \u044d\u0442\u043e \u0434\u0440\u043e\u0431\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0432 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u043e\u0442 0 \u0434\u043e 1.",(0,l.kt)("br",null)," \u0417\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u043f\u043e ",(0,l.kt)("inlineCode",{parentName:"td"},"k")," \u0434\u043e\u043b\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043e ",(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE 1/10"),", \u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0438\u0437 1/10 \u0434\u0430\u043d\u043d\u044b\u0445. ",(0,l.kt)("a",{parentName:"td",href:"#select-sample-k"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0417\u0434\u0435\u0441\u044c ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," \u2013 \u044d\u0442\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.",(0,l.kt)("br",null)," \u0417\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438, \u0441\u043e\u0441\u0442\u043e\u044f\u0449\u0435\u0439 \u0438\u0437 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c ",(0,l.kt)("inlineCode",{parentName:"td"},"n")," \u0441\u0442\u0440\u043e\u043a. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043e ",(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE 10000000"),", \u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0434\u043b\u044f \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c 10,000,000 \u0441\u0442\u0440\u043e\u043a. ",(0,l.kt)("a",{parentName:"td",href:"#select-sample-n"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"SAMPLE k OFFSET m")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0417\u0434\u0435\u0441\u044c ",(0,l.kt)("inlineCode",{parentName:"td"},"k")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"td"},"m")," \u2013 \u0447\u0438\u0441\u043b\u0430 \u043e\u0442 0 \u0434\u043e 1.",(0,l.kt)("br",null)," \u0417\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u043f\u043e ",(0,l.kt)("inlineCode",{parentName:"td"},"k")," \u0434\u043e\u043b\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0441\u043e \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u043c \u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"td"},"m")," \u0434\u043e\u043b\u044e. ",(0,l.kt)("a",{parentName:"td",href:"#select-sample-offset"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"))))),(0,l.kt)("h2",{id:"select-sample-k"},"SAMPLE k"),(0,l.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u2013 \u0447\u0438\u0441\u043b\u043e \u0432 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u043e\u0442 0 \u0434\u043e 1. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0434\u0440\u043e\u0431\u043d\u0430\u044f, \u0442\u0430\u043a \u0438 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u0437\u0430\u043f\u0438\u0441\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 1/2")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 0.5"),"."),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE k"),", \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0434\u043b\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u0434\u043e\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    Title,\n    count() * 10 AS PageViews\nFROM hits_distributed\nSAMPLE 0.1\nWHERE\n    CounterID = 34\nGROUP BY Title\nORDER BY PageViews DESC LIMIT 1000\n")),(0,l.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0438\u0437 0.1 (10%) \u0434\u0430\u043d\u043d\u044b\u0445. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043d\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u0431\u043b\u0438\u0436\u0451\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"count()")," \u043d\u0443\u0436\u043d\u043e \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0443\u043c\u043d\u043e\u0436\u0438\u0442\u044c \u043d\u0430 10."),(0,l.kt)("p",null,"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \xab\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0439\xbb: \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438 \u0442\u0435\u043c \u0436\u0435 \u043a\u043b\u044e\u0447\u043e\u043c \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u043e\u0439 \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u043e\u043b\u0435\u0439 \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0434\u0430\u043d\u043d\u044b\u0445. \u0422\u043e \u0435\u0441\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0437 \u0440\u0430\u0437\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445, \u0432 \u0440\u0430\u0437\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c."),(0,l.kt)("h2",{id:"select-sample-n"},"SAMPLE n"),(0,l.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u2013 \u044d\u0442\u043e \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 10000000"),"."),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u043d\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE n"),", \u0437\u0430\u043f\u0440\u043e\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0438\u0437 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u0441\u0442\u0440\u043e\u043a (\u043d\u043e \u043d\u0435 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u044d\u0442\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0437\u0430\u0434\u0430\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 10000000"),", \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043f\u043e\u043f\u0430\u0434\u0443\u0442 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 10,000,000 \u0441\u0442\u0440\u043e\u043a."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043e `n` \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0447\u0438\u0441\u043b\u043e\u043c. \u0422\u0430\u043a \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0435\u0434\u0438\u043d\u0438\u0446\u0435\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u0430 \u0433\u0440\u0430\u043d\u0443\u043b\u0430 (\u0435\u0451 \u0440\u0430\u0437\u043c\u0435\u0440 \u0437\u0430\u0434\u0430\u0451\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 `index_granularity` \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b), \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0438, \u0440\u0430\u0437\u043c\u0435\u0440 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043f\u0440\u0435\u0432\u043e\u0441\u0445\u043e\u0434\u0438\u0442 \u0440\u0430\u0437\u043c\u0435\u0440 \u0433\u0440\u0430\u043d\u0443\u043b\u044b.\n:::\n')),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE n")," \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d (\u0442\u043e \u0435\u0441\u0442\u044c \u043d\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0442\u043e\u043c, \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a\u0430\u043a\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0443\u0434\u0435\u0442 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432\u044b\u0431\u043e\u0440\u043a\u0430). \u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,l.kt)("inlineCode",{parentName:"p"},"_sample_factor"),"."),(0,l.kt)("p",null,"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,l.kt)("inlineCode",{parentName:"p"},"_sample_factor")," \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u0442\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0437\u0430\u0434\u0430\u043d\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE BY")," (\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b MergeTree"),"). \u0412 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u2013 \u043e\u043d \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e \u043c\u0435\u0440\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443. \u041d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"_sample_factor"),"."),(0,l.kt)("p",null,"\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u0435\u0434\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0439 \u0441\u0430\u0439\u0442\u0430. \u041f\u0440\u0438\u043c\u0435\u0440 \u043d\u0438\u0436\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0443\u043c\u043c\u0430\u0440\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(PageViews * _sample_factor)\nFROM visits\nSAMPLE 10000000\n")),(0,l.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0438\u0437\u0438\u0442\u043e\u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(_sample_factor)\nFROM visits\nSAMPLE 10000000\n")),(0,l.kt)("p",null,"\u0412 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043d\u0438\u0436\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u043f\u0440\u0438 \u0440\u0430\u0441\u0447\u0435\u0442\u0435 \u0441\u0440\u0435\u0434\u043d\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0443\u043c\u043d\u043e\u0436\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0430 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0435 \u043d\u0443\u0436\u043d\u043e."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT avg(Duration)\nFROM visits\nSAMPLE 10000000\n")),(0,l.kt)("h2",{id:"select-sample-offset"},"SAMPLE k OFFSET m"),(0,l.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u2013 \u0447\u0438\u0441\u043b\u0430 \u0432 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0435 \u043e\u0442 0 \u0434\u043e 1. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE 0.1 OFFSET 0.5"),". \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u0434\u0440\u043e\u0431\u043d\u0430\u044f, \u0442\u0430\u043a \u0438 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u0430\u044f \u0444\u043e\u0440\u043c\u0430 \u0437\u0430\u043f\u0438\u0441\u0438."),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0437\u0430\u0434\u0430\u043d\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"SAMPLE k OFFSET m"),", \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0438\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"k")," \u0434\u043e\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u043c \u043d\u0430 \u0434\u043e\u043b\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"m"),". \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0438\u0436\u0435."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SAMPLE 1/10\n")),(0,l.kt)("p",null,"\u0412 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u043f\u043e 1/10 \u0434\u043e\u043b\u0435 \u0432\u0441\u0435\u0445 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[++------------------]")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 2")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SAMPLE 1/10 OFFSET 1/2\n")),(0,l.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 1/10 \u0434\u043e\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u0437\u044f\u0442\u0430 \u0438\u0437 \u0432\u0442\u043e\u0440\u043e\u0439 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u044b \u0434\u0430\u043d\u043d\u044b\u0445."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[----------++--------]")))}k.isMDXComponent=!0}}]);