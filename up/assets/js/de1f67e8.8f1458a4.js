"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4147],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],i={},o="system.crash_log",p={unversionedId:"zh/operations/system-tables/crash-log",id:"zh/operations/system-tables/crash-log",title:"system.crash_log",description:"system-tablescrashlog}",source:"@site/docs/zh/operations/system-tables/crash-log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/crash-log",permalink:"/docs-gh-pages/up/zh/operations/system-tables/crash-log",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/crash-log.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.contributors",permalink:"/docs-gh-pages/up/zh/operations/system-tables/contributors"},next:{title:"system.current_roles",permalink:"/docs-gh-pages/up/zh/operations/system-tables/current-roles"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system-tables_crash_log"},"system.crash_log"),(0,s.kt)("p",null,"\u5305\u542b\u6709\u5173\u81f4\u547d\u9519\u8bef\u5806\u6808\u8ddf\u8e2a\u7684\u4fe1\u606f.\u8be5\u8868\u9ed8\u8ba4\u4e0d\u5b58\u5728\u4e8e\u6570\u636e\u5e93\u4e2d, \u4ec5\u5728\u53d1\u751f\u81f4\u547d\u9519\u8bef\u65f6\u624d\u521b\u5efa."),(0,s.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u4e8b\u4ef6\u65e5\u671f."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/datetime"},"Datetime"),") \u2014 \u4e8b\u4ef6\u65f6\u95f4."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"timestamp_ns")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u4ee5\u7eb3\u79d2\u4e3a\u5355\u4f4d\u7684\u4e8b\u4ef6\u65f6\u95f4\u6233."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"signal")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u4fe1\u53f7\u7f16\u53f7."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u7ebf\u7a0bID."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string"},"String"),") \u2014 \u67e5\u8be2ID."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"trace")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u5d29\u6e83\u65f6\u7684\u5806\u6808\u8ddf\u8e2a.\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f ClickHouse \u670d\u52a1\u5668\u8fdb\u7a0b\u5185\u7684\u4e00\u4e2a\u865a\u62df\u5185\u5b58\u5730\u5740."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"trace_full")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/array"},"Array"),"(",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string"},"String"),")) \u2014 \u5d29\u6e83\u65f6\u7684\u5806\u6808\u8ddf\u8e2a.\u6bcf\u4e2a\u5143\u7d20\u5728 ClickHouse \u670d\u52a1\u5668\u8fdb\u7a0b\u4e2d\u5305\u542b\u4e00\u4e2a\u88ab\u8c03\u7528\u7684\u65b9\u6cd5."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"version")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string"},"String"),") \u2014 ClickHouse \u670d\u52a1\u5668\u7248\u672c."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"revision")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ClickHouse \u670d\u52a1\u5668\u8ba2\u6b63\u7248\u672c."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"build_id")," (",(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7f16\u8bd1\u5668\u751f\u6210\u7684 BuildID.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u6848\u4f8b")),(0,s.kt)("p",null,"\u67e5\u8be2:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.crash_log ORDER BY event_time DESC LIMIT 1;\n")),(0,s.kt)("p",null,"\u7ed3\u679c (\u90e8\u5206):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:   2020-10-14\nevent_time:   2020-10-14 15:47:40\ntimestamp_ns: 1602679660271312710\nsignal:       11\nthread_id:    23624\nquery_id:     428aab7c-8f5c-44e9-9607-d16b44467e69\ntrace:        [188531193,...]\ntrace_full:   ['3. DB::(anonymous namespace)::FunctionFormatReadableTimeDelta::executeImpl(std::__1::vector<DB::ColumnWithTypeAndName, std::__1::allocator<DB::ColumnWithTypeAndName> >&, std::__1::vector<unsigned long, std::__1::allocator<unsigned long> > const&, unsigned long, unsigned long) const @ 0xb3cc1f9 in /home/username/work/ClickHouse/build/programs/clickhouse',...]\nversion:      ClickHouse 20.11.1.1\nrevision:     54442\nbuild_id:\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/up/zh/operations/system-tables/trace_log"},"trace_log")," \u7cfb\u7edf\u8868")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/crash-log"},"\u539f\u59cb\u6587\u7ae0")))}d.isMDXComponent=!0}}]);