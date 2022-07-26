"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97498],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84397:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:54,sidebar_label:"Query Profiling"},l="Sampling Query Profiler",p={unversionedId:"en/operations/optimizing-performance/sampling-query-profiler",id:"en/operations/optimizing-performance/sampling-query-profiler",title:"Sampling Query Profiler",description:"ClickHouse runs sampling profiler that allows analyzing query execution. Using profiler you can find source code routines that used the most frequently during query execution. You can trace CPU time and wall-clock time spent including idle time.",source:"@site/docs/en/operations/optimizing-performance/sampling-query-profiler.md",sourceDirName:"en/operations/optimizing-performance",slug:"/en/operations/optimizing-performance/sampling-query-profiler",permalink:"/docs-gh-pages/up/en/operations/optimizing-performance/sampling-query-profiler",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/optimizing-performance/sampling-query-profiler.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54,sidebar_label:"Query Profiling"},sidebar:"english",previous:{title:"Optimizing Performance",permalink:"/docs-gh-pages/up/en/operations/optimizing-performance/"},next:{title:"System Tables",permalink:"/docs-gh-pages/up/en/operations/system-tables/"}},c={},u=[{value:"Example",id:"example",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sampling-query-profiler"},"Sampling Query Profiler"),(0,i.kt)("p",null,"ClickHouse runs sampling profiler that allows analyzing query execution. Using profiler you can find source code routines that used the most frequently during query execution. You can trace CPU time and wall-clock time spent including idle time."),(0,i.kt)("p",null,"To use profiler:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setup the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/server-configuration-parameters/settings#server_configuration_parameters-trace_log"},"trace_log")," section of the server configuration."),(0,i.kt)("p",{parentName:"li"},"This section configures the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/system-tables/trace_log#system_tables-trace_log"},"trace_log")," system table containing the results of the profiler functioning. It is configured by default. Remember that data in this table is valid only for a running server. After the server restart, ClickHouse does not clean up the table and all the stored virtual memory address may become invalid.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Setup the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/settings/settings#query_profiler_cpu_time_period_ns"},"query_profiler_cpu_time_period_ns")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/settings/settings#query_profiler_real_time_period_ns"},"query_profiler_real_time_period_ns")," settings. Both settings can be used simultaneously."),(0,i.kt)("p",{parentName:"li"},"These settings allow you to configure profiler timers. As these are the session settings, you can get different sampling frequency for the whole server, individual users or user profiles, for your interactive session, and for each individual query."))),(0,i.kt)("p",null,"The default sampling frequency is one sample per second and both CPU and real timers are enabled. This frequency allows collecting enough information about ClickHouse cluster. At the same time, working with this frequency, profiler does not affect ClickHouse server\u2019s performance. If you need to profile each individual query try to use higher sampling frequency."),(0,i.kt)("p",null,"To analyze the ",(0,i.kt)("inlineCode",{parentName:"p"},"trace_log")," system table:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-common-static-dbg")," package. See ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/getting-started/install#install-from-deb-packages"},"Install from DEB Packages"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Allow introspection functions by the ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/operations/settings/settings#settings-allow_introspection_functions"},"allow_introspection_functions")," setting."),(0,i.kt)("p",{parentName:"li"},"For security reasons, introspection functions are disabled by default.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"addressToLine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"addressToLineWithInlines"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"addressToSymbol")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"demangle")," ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/sql-reference/functions/introspection"},"introspection functions")," to get function names and their positions in ClickHouse code. To get a profile for some query, you need to aggregate data from the ",(0,i.kt)("inlineCode",{parentName:"p"},"trace_log")," table. You can aggregate data by individual functions or by the whole stack traces."))),(0,i.kt)("p",null,"If you need to visualize ",(0,i.kt)("inlineCode",{parentName:"p"},"trace_log")," info, try ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/en/interfaces/third-party/gui#clickhouse-flamegraph-clickhouse-flamegraph"},"flamegraph")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/laplab/clickhouse-speedscope"},"speedscope"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"In this example we:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Filtering ",(0,i.kt)("inlineCode",{parentName:"p"},"trace_log")," data by a query identifier and the current date.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Aggregating by stack trace.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Using introspection functions, we will get a report of:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Names of symbols and corresponding source code functions."),(0,i.kt)("li",{parentName:"ul"},"Source code locations of these functions.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    count(),\n    arrayStringConcat(arrayMap(x -> concat(demangle(addressToSymbol(x)), '\\n    ', addressToLine(x)), trace), '\\n') AS sym\nFROM system.trace_log\nWHERE (query_id = 'ebca3574-ad0a-400a-9cbc-dca382f5998c') AND (event_date = today())\nGROUP BY trace\nORDER BY count() DESC\nLIMIT 10\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{% include "examples/sampling_query_profiler_result.txt" %}\n')))}f.isMDXComponent=!0}}]);