"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59690],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(f,i(i({ref:t},o),{},{components:a})):r.createElement(f,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61094:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],s={},u="system.quota_limits",p={unversionedId:"ru/operations/system-tables/quota_limits",id:"ru/operations/system-tables/quota_limits",title:"system.quota_limits",description:"systemtables-quotalimits}",source:"@site/docs/ru/operations/system-tables/quota_limits.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/quota_limits",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/quota_limits",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/quota_limits.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.query_views_log",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/query_views_log"},next:{title:"system.quota_usage",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/quota_usage"}},o={},c=[],m={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system_tables-quota_limits"},"system.quota_limits"),(0,l.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0430\u0445 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043e\u0432 \u0432\u0441\u0435\u0445 \u043a\u0432\u043e\u0442. \u041e\u0434\u043d\u043e\u0439 \u043a\u0432\u043e\u0442\u0435 \u043c\u043e\u0433\u0443\u0442 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043b\u044e\u0431\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0438\u043b\u0438 \u043d\u043e\u043b\u044c."),(0,l.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043a\u0432\u043e\u0442\u044b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0434\u043b\u0438\u043d\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u0434\u043b\u044f \u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_randomized_interval")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041e\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c. \u0418\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 \u0432\u0440\u0435\u043c\u044f, \u0435\u0441\u043b\u0438 \u043e\u043d \u043d\u0435 \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432 1 \u043c\u0438\u043d\u0443\u0442\u0443 \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 \u043c\u0438\u043d\u0443\u0442 (\u0442\u043e \u0435\u0441\u0442\u044c \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0432 11:20:00, \u043d\u043e \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 11:20:01), \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432 \u043e\u0434\u0438\u043d \u0434\u0435\u043d\u044c \u0432\u0441\u0435\u0433\u0434\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u043e\u043b\u043d\u043e\u0447\u044c UTC. \u0415\u0441\u043b\u0438 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d, \u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f, \u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u043e\u0434\u0438\u043d \u0437\u0430 \u0434\u0440\u0443\u0433\u0438\u043c. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043d\u0435 \u0440\u0430\u043d\u0434\u043e\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_query_selects")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_query_inserts")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"INSERT"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0448\u0438\u0431\u043e\u043a."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u0430\u0439\u0442\u043e\u0432, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0438\u0437 \u0432\u0441\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/float"},"Float64"),")) \u2014 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445.")))}d.isMDXComponent=!0}}]);