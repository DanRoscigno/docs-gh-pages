"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29446],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||s;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82442:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),i=["components"],l={},o="system.crash_log",u={unversionedId:"ru/operations/system-tables/crash-log",id:"ru/operations/system-tables/crash-log",title:"system.crash_log",description:"system-tablescrashlog}",source:"@site/docs/ru/operations/system-tables/crash-log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/crash-log",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/crash-log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/crash-log.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.contributors",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/contributors"},next:{title:"system.current_roles",permalink:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/current-roles"}},c={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-tables_crash_log"},"system.crash_log"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0430\u0445 \u0441\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u0444\u0430\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a. \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0438 \u0444\u0430\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a."),(0,s.kt)("p",null,"\u041a\u043e\u043b\u043e\u043d\u043a\u0438:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u0414\u0430\u0442\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u0412\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timestamp_ns")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0412\u0440\u0435\u043c\u044f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0441 \u043d\u0430\u043d\u043e\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u043c\u0438."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"signal")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u041d\u043e\u043c\u0435\u0440 \u0441\u0438\u0433\u043d\u0430\u043b\u0430, \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0435\u0433\u043e \u0432 \u043f\u043e\u0442\u043e\u043a."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0440\u0435\u0434\u0430."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"trace")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0442\u0435\u043a\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0448\u0438\u0431\u043a\u0438. \u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0430\u0434\u0440\u0435\u0441\u043e\u0432, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"trace_full")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0422\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0442\u0435\u043a\u0430 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0448\u0438\u0431\u043a\u0438. \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"version")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0412\u0435\u0440\u0441\u0438\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u0420\u0435\u0432\u0438\u0437\u0438\u044f \u0441\u0431\u043e\u0440\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"build_id")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/sql-reference/data-types/string"},"String"),") \u2014 BuildID, \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u043e\u043c.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,s.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.crash_log ORDER BY event_time DESC LIMIT 1;\n")),(0,s.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 (\u043f\u0440\u0438\u0432\u0435\u0434\u0451\u043d \u043d\u0435 \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:   2020-10-14\nevent_time:   2020-10-14 15:47:40\ntimestamp_ns: 1602679660271312710\nsignal:       11\nthread_id:    23624\nquery_id:     428aab7c-8f5c-44e9-9607-d16b44467e69\ntrace:        [188531193,...]\ntrace_full:   ['3. DB::(anonymous namespace)::FunctionFormatReadableTimeDelta::executeImpl(std::__1::vector<DB::ColumnWithTypeAndName, std::__1::allocator<DB::ColumnWithTypeAndName> >&, std::__1::vector<unsigned long, std::__1::allocator<unsigned long> > const&, unsigned long, unsigned long) const @ 0xb3cc1f9 in /home/username/work/ClickHouse/build/programs/clickhouse',...]\nversion:      ClickHouse 20.11.1.1\nrevision:     54442\nbuild_id:\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/ru/operations/system-tables/trace_log"},"trace_log"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/crash-log"},"Original article")))}d.isMDXComponent=!0}}]);