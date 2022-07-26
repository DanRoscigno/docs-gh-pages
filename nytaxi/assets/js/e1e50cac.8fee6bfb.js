"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75014],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,N=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(N,p(p({ref:t},c),{},{components:a})):n.createElement(N,p({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75818:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p=["components"],l={sidebar_position:61,sidebar_label:"Interval"},o="Interval",s={unversionedId:"ru/sql-reference/data-types/special-data-types/interval",id:"ru/sql-reference/data-types/special-data-types/interval",title:"Interval",description:"data-type-interval}",source:"@site/docs/ru/sql-reference/data-types/special-data-types/interval.md",sourceDirName:"ru/sql-reference/data-types/special-data-types",slug:"/ru/sql-reference/data-types/special-data-types/interval",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/special-data-types/interval",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/special-data-types/interval.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61,sidebar_label:"Interval"},sidebar:"russia",previous:{title:"Nothing",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/special-data-types/nothing"},next:{title:"\u0414\u043e\u043c\u0435\u043d\u044b",permalink:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/domains/"}},c={},d=[],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-type-interval"},"Interval"),(0,i.kt)("p",null,"\u0421\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u0434\u0430\u0442 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/special-data-types/interval#operator-interval"},"INTERVAL")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u0442\u0438\u043f\u043e\u0432."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u041d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 `Interval` \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435.\n")),(0,i.kt)("p",{parentName:"div"},"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430."),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430.")),(0,i.kt)("p",{parentName:"div"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SECOND")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MINUTE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOUR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAY")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WEEK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MONTH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QUARTER")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YEAR"))),(0,i.kt)("p",{parentName:"div"},"\u041a\u0430\u0436\u0434\u043e\u043c\u0443 \u0442\u0438\u043f\u0443 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"IntervalDay")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"DAY"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(INTERVAL 4 DAY)\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(toIntervalDay(4))\u2500\u2510\n\u2502 IntervalDay                  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{parentName:"div",id:"data-type-interval-usage-remarks"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",{parentName:"div"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Interval")," \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0438\u043f\u043e\u0432 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/special-data-types/interval"},"Date")," \u0438 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/special-data-types/interval"},"DateTime"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c 4 \u0434\u043d\u044f \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0434\u0430\u0442\u0435:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() as current_date_time, current_date_time + INTERVAL 4 DAY\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(now(), toIntervalDay(4))\u2500\u2510\n\u2502 2019-10-23 10:58:45 \u2502           2019-10-27 10:58:45 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",{parentName:"div"},"\u041d\u0435\u043b\u044c\u0437\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432. \u041d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u0432\u0438\u0434\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"4 DAY 1 HOUR"),". \u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0430\u0439\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432 \u0435\u0434\u0438\u043d\u0438\u0446\u0430\u0445 \u043c\u0435\u043d\u044c\u0448\u0438\u0445 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u044b\u0445 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0435\u0434\u0438\u043d\u0438\u0446\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \xab1 \u0434\u0435\u043d\u044c \u0438 1 \u0447\u0430\u0441\xbb \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0440\u0430\u0437\u0438\u0442\u044c \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"25 HOUR")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"90000 SECOND"),"."),(0,i.kt)("p",{parentName:"div"},"\u0410\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0442\u0438\u043f\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Interval")," \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b, \u043e\u0434\u043d\u0430\u043a\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u043a \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c \u0442\u0438\u043f\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT now() AS current_date_time, current_date_time + INTERVAL 4 DAY + INTERVAL 3 HOUR\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500current_date_time\u2500\u252c\u2500plus(plus(now(), toIntervalDay(4)), toIntervalHour(3))\u2500\u2510\n\u2502 2019-10-23 11:16:28 \u2502                                    2019-10-27 14:16:28 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",{parentName:"div"},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0438\u0432\u0435\u0434\u0451\u0442 \u043a \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"select now() AS current_date_time, current_date_time + (INTERVAL 4 DAY + INTERVAL 3 HOUR)\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 19.14.1):\nCode: 43. DB::Exception: Received from localhost:9000. DB::Exception: Wrong argument types for function plus: if one argument is Interval, then another must be Date or DateTime..\n")),(0,i.kt)("h2",{parentName:"div",id:"smotrite-takzhe"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/special-data-types/interval#operator-interval"},"INTERVAL")),(0,i.kt)("li",{parentName:"ul"},"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 ",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/ru/sql-reference/data-types/special-data-types/interval#function-tointerval"},"toInterval"))))))}u.isMDXComponent=!0}}]);