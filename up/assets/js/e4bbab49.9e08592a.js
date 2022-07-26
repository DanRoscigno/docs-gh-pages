"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[3243],{3905:function(e,t,r){r.d(t,{Zo:function(){return o},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},o=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),m=i(r),f=n,g=m["".concat(l,".").concat(f)]||m[f]||c[f]||s;return r?a.createElement(g,p(p({ref:t},o),{},{components:r})):a.createElement(g,p({ref:t},o))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,p=new Array(s);p[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,p[1]=u;for(var i=2;i<s;i++)p[i]=r[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14106:function(e,t,r){r.r(t),r.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),p=["components"],u={sidebar_position:141},l="deltaSumTimestamp",i={unversionedId:"ru/sql-reference/aggregate-functions/reference/deltasumtimestamp",id:"ru/sql-reference/aggregate-functions/reference/deltasumtimestamp",title:"deltaSumTimestamp",description:"agg_functions-deltasumtimestamp}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/deltasumtimestamp.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/deltasumtimestamp",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/deltasumtimestamp",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/deltasumtimestamp.md",tags:[],version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141},sidebar:"russia",previous:{title:"deltaSum",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/deltasum"},next:{title:"summap",permalink:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/summap"}},o={},c=[],m={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,p);return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"agg_functions-deltasumtimestamp"},"deltaSumTimestamp"),(0,s.kt)("p",null,"\u0421\u0443\u043c\u043c\u0438\u0440\u0443\u0435\u0442 \u0440\u0430\u0437\u043d\u0438\u0446\u0443 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438. \u0415\u0441\u043b\u0438 \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u0430 \u2014 \u043e\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0430."),(0,s.kt)("p",null,"\u042d\u0442\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0434\u043b\u044f ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/statements/create/view#materialized"},"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439"),", \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u0445 \u043f\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c\u0443 \u0431\u0430\u043a\u0435\u0442\u0443 \u0441\u043e\u0433\u043b\u0430\u0441\u043d\u043e timestamp, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e \u0431\u0430\u043a\u0435\u0442\u0443 ",(0,s.kt)("inlineCode",{parentName:"p"},"toStartOfMinute"),'. \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0442\u0430\u043a\u043e\u043c \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 timestamp, \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0438\u0445 \u0432 "\u043f\u0440\u0430\u0432\u043e\u043c" \u043f\u043e\u0440\u044f\u0434\u043a\u0435. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 ',(0,s.kt)("inlineCode",{parentName:"p"},"timestamp")," \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u043b\u0438\u044f\u043d\u0438\u044f."),(0,s.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0440\u0430\u0437\u043d\u0438\u0446\u0443 \u043c\u0435\u0436\u0434\u0443 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/aggregate-functions/reference/deltasum#agg_functions-deltasum"},"deltaSum")," \u0432\u043c\u0435\u0441\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,s.kt)("inlineCode",{parentName:"p"},"deltaSumTimestamp"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"deltaSumTimestamp(value, timestamp)\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," \u2014 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0442\u0438\u043f\u0430 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"Integer"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/date"},"Date"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/datetime"},"DateTime"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timestamp")," \u2014 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0434\u043b\u044f \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0442\u0438\u043f\u0430 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"Integer"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/date"},"Date"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/data-types/datetime"},"DateTime"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0437\u043d\u0438\u0446\u0430 \u043c\u0435\u0436\u0434\u0443 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438, \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0443 ",(0,s.kt)("inlineCode",{parentName:"li"},"timestamp"),".")),(0,s.kt)("p",null,"\u0422\u0438\u043f: ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"Integer"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/float"},"Float"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/date"},"Date"),", \u0438\u043b\u0438 ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/datetime"},"DateTime"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,s.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT deltaSumTimestamp(value, timestamp)\nFROM (SELECT number AS timestamp, [0, 4, 8, 3, 0, 0, 0, 1, 3, 5][number] AS value FROM numbers(1, 10));\n")),(0,s.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500deltaSumTimestamp(value, timestamp)\u2500\u2510\n\u2502                                  13 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);