"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40311],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=n,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||p;return a?r.createElement(k,i(i({ref:t},m),{},{components:a})):r.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<p;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},49236:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=a(87462),n=a(63366),p=(a(67294),a(3905)),i=["components"],s={},o="system.mutations",l={unversionedId:"ru/operations/system-tables/mutations",id:"ru/operations/system-tables/mutations",title:"system.mutations",description:"system_tables-mutations}",source:"@site/docs/ru/operations/system-tables/mutations.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/mutations",permalink:"/docs-gh-pages/up/ru/operations/system-tables/mutations",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/mutations.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.metrics",permalink:"/docs-gh-pages/up/ru/operations/system-tables/metrics"},next:{title:"system.numbers",permalink:"/docs-gh-pages/up/ru/operations/system-tables/numbers"}},m={},u=[],c={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"system_tables-mutations"},"system.mutations"),(0,p.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0445\u043e\u0434\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f ",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/statements/alter/#mutations"},"\u043c\u0443\u0442\u0430\u0446\u0438\u0439")," \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 MergeTree. \u041a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043e\u0434\u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,p.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"database")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0411\u0414, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0431\u044b\u043b\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043c\u0443\u0442\u0430\u0446\u0438\u044f.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"table")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0431\u044b\u043b\u0430 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0430 \u043c\u0443\u0442\u0430\u0446\u0438\u044f.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"mutation_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 ID \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0414\u043b\u044f \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u044d\u0442\u0438 ID \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u0438\u043c\u0435\u043d\u0430\u043c \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"<table_path_in_zookeeper>/mutations/")," \u0432 ZooKeeper, \u0434\u043b\u044f \u043d\u0435\u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u2014 \u0438\u043c\u0435\u043d\u0430\u043c \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"command")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043c\u0443\u0442\u0430\u0446\u0438\u0438 (\u0447\u0430\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0441\u043b\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"ALTER TABLE [db.]table"),").")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"create_time")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043c\u0443\u0442\u0430\u0446\u0438\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"block_numbers.partition_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0414\u043b\u044f \u043c\u0443\u0442\u0430\u0446\u0438\u0439 \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0439 (\u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438). \u0414\u043b\u044f \u043c\u0443\u0442\u0430\u0446\u0438\u0439 \u043d\u0435\u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u043c\u0430\u0441\u0441\u0438\u0432 \u043f\u0443\u0441\u0442\u043e\u0439.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"block_numbers.number")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"Int64"),")) \u2014 \u0414\u043b\u044f \u043c\u0443\u0442\u0430\u0446\u0438\u0439 \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438, \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0431\u043b\u043e\u043a\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c \u044d\u0442\u043e\u0439 \u043c\u0443\u0442\u0430\u0446\u0438\u0435\u0439. \u0412 \u043a\u0430\u0436\u0434\u043e\u0439 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0443\u0441\u043a\u0438, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0435 \u0431\u043b\u043e\u043a\u0438 \u0441 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438 \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440."),(0,p.kt)("p",{parentName:"li"},"\u0414\u043b\u044f \u043d\u0435\u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0431\u043b\u043e\u043a\u043e\u0432 \u0441\u043a\u0432\u043e\u0437\u043d\u0430\u044f \u043f\u043e \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f\u043c. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0437\u0430\u043f\u0438\u0441\u044c \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0431\u043b\u043e\u043a\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c \u043c\u0443\u0442\u0430\u0446\u0438\u0435\u0439.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"parts_to_do_names")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441 \u0438\u043c\u0435\u043d\u0430\u043c\u0438 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043c\u0443\u0442\u0430\u0446\u0438\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"parts_to_do")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043c\u0443\u0442\u0430\u0446\u0438\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"is_done")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u041f\u0440\u0438\u0437\u043d\u0430\u043a, \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u043b\u0438 \u043c\u0443\u0442\u0430\u0446\u0438\u044f. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u043c\u0443\u0442\u0430\u0446\u0438\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430,"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u043c\u0443\u0442\u0430\u0446\u0438\u044f \u0435\u0449\u0435 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442\u0441\u044f.")))),(0,p.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"\u0417\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u0435"')),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre"},"\u0414\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 `parts_to_do = 0`, \u0434\u043b\u044f \u0440\u0435\u043f\u043b\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044f, \u043a\u043e\u0433\u0434\u0430 \u043c\u0443\u0442\u0430\u0446\u0438\u044f \u0435\u0449\u0451 \u043d\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u0438\u0437-\u0437\u0430 \u0434\u043e\u043b\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0435\u0439\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 `INSERT`, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043c\u0443\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c.\n")),(0,p.kt)("p",{parentName:"div"},"\u0415\u0441\u043b\u0438 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u043a\u0430\u043a\u043e\u0433\u043e-\u043b\u0438\u0431\u043e \u043a\u0443\u0441\u043a\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,p.kt)("ul",{parentName:"div"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"latest_failed_part")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u043a\u0443\u0441\u043a\u0430, \u043c\u0443\u0442\u0430\u0446\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435 \u0443\u0434\u0430\u043b\u0430\u0441\u044c.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"latest_fail_time")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u043c\u0443\u0442\u0430\u0446\u0438\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"latest_fail_reason")," (",(0,p.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043e\u0448\u0438\u0431\u043a\u0438 \u043c\u0443\u0442\u0430\u0446\u0438\u0438."))),(0,p.kt)("p",{parentName:"div"},(0,p.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,p.kt)("ul",{parentName:"div"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/sql-reference/statements/alter/#mutations"},"\u041c\u0443\u0442\u0430\u0446\u0438\u0438")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/mergetree"},"\u0414\u0432\u0438\u0436\u043e\u043a MergeTree")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/ru/engines/table-engines/mergetree-family/replication"},"\u0420\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445")," (\u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u043e ReplicatedMergeTree)")))))}d.isMDXComponent=!0}}]);