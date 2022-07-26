"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17663],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16489:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:54,sidebar_label:"\u67e5\u8be2\u5206\u6790"},l="\u91c7\u6837\u67e5\u8be2\u63a2\u67e5\u5668",s={unversionedId:"zh/operations/optimizing-performance/sampling-query-profiler",id:"zh/operations/optimizing-performance/sampling-query-profiler",title:"\u91c7\u6837\u67e5\u8be2\u63a2\u67e5\u5668",description:"sampling-query-profiler}",source:"@site/docs/zh/operations/optimizing-performance/sampling-query-profiler.md",sourceDirName:"zh/operations/optimizing-performance",slug:"/zh/operations/optimizing-performance/sampling-query-profiler",permalink:"/docs-gh-pages/up/zh/operations/optimizing-performance/sampling-query-profiler",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/optimizing-performance/sampling-query-profiler.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:54,sidebar_label:"\u67e5\u8be2\u5206\u6790"},sidebar:"chinese",previous:{title:"\u914d\u7f6e\u6587\u4ef6",permalink:"/docs-gh-pages/up/zh/operations/configuration-files"},next:{title:"\u914d\u989d",permalink:"/docs-gh-pages/up/zh/operations/quotas"}},c={},u=[{value:"\u793a\u4f8b",id:"example",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sampling-query-profiler"},"\u91c7\u6837\u67e5\u8be2\u63a2\u67e5\u5668"),(0,i.kt)("p",null,"ClickHouse\u8fd0\u884c\u5141\u8bb8\u5206\u6790\u67e5\u8be2\u6267\u884c\u7684\u91c7\u6837\u63a2\u67e5\u5668\u3002 \u4f7f\u7528\u63a2\u67e5\u5668\uff0c\u60a8\u53ef\u4ee5\u627e\u5230\u5728\u67e5\u8be2\u6267\u884c\u671f\u95f4\u4f7f\u7528\u6700\u9891\u7e41\u7684\u6e90\u4ee3\u7801\u4f8b\u7a0b\u3002 \u60a8\u53ef\u4ee5\u8ddf\u8e2aCPU\u65f6\u95f4\u548c\u6302\u949f\u82b1\u8d39\u7684\u65f6\u95f4\uff0c\u5305\u62ec\u7a7a\u95f2\u65f6\u95f4\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528\u6982\u8981\u5206\u6790\u5668:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-trace_log"},"trace_log")," \u670d\u52a1\u5668\u914d\u7f6e\u90e8\u5206\u3002"),(0,i.kt)("p",{parentName:"li"},"\u672c\u8282\u914d\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/system-tables/trace_log#system_tables-trace_log"},"trace_log")," \u7cfb\u7edf\u8868\u5305\u542b\u63a2\u67e5\u5668\u8fd0\u884c\u7684\u7ed3\u679c\u3002 \u5b83\u662f\u9ed8\u8ba4\u914d\u7f6e\u7684\u3002 \u8bf7\u8bb0\u4f4f\uff0c\u6b64\u8868\u4e2d\u7684\u6570\u636e\u4ec5\u5bf9\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1\u5668\u6709\u6548\u3002 \u670d\u52a1\u5668\u91cd\u65b0\u542f\u52a8\u540e\uff0cClickHouse\u4e0d\u4f1a\u6e05\u7406\u8868\uff0c\u6240\u6709\u5b58\u50a8\u7684\u865a\u62df\u5185\u5b58\u5730\u5740\u90fd\u53ef\u80fd\u65e0\u6548\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bbe\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/settings#query_profiler_cpu_time_period_ns"},"query_profiler_cpu_time_period_ns")," \u6216 ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/settings#query_profiler_real_time_period_ns"},"query_profiler_real_time_period_ns")," \u8bbe\u7f6e\u3002 \u8fd9\u4e24\u79cd\u8bbe\u7f6e\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\u3002"),(0,i.kt)("p",{parentName:"li"},"\u8fd9\u4e9b\u8bbe\u7f6e\u5141\u8bb8\u60a8\u914d\u7f6e\u63a2\u67e5\u5668\u8ba1\u65f6\u5668\u3002 \u7531\u4e8e\u8fd9\u4e9b\u662f\u4f1a\u8bdd\u8bbe\u7f6e\uff0c\u60a8\u53ef\u4ee5\u4e3a\u6574\u4e2a\u670d\u52a1\u5668\u3001\u5355\u4e2a\u7528\u6237\u6216\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u3001\u4ea4\u4e92\u5f0f\u4f1a\u8bdd\u4ee5\u53ca\u6bcf\u4e2a\u5355\u4e2a\u67e5\u8be2\u83b7\u53d6\u4e0d\u540c\u7684\u91c7\u6837\u9891\u7387\u3002"))),(0,i.kt)("p",null,"\u9ed8\u8ba4\u91c7\u6837\u9891\u7387\u4e3a\u6bcf\u79d2\u4e00\u4e2a\u91c7\u6837\uff0cCPU\u548c\u5b9e\u65f6\u5b9a\u65f6\u5668\u90fd\u542f\u7528\u3002 \u8be5\u9891\u7387\u5141\u8bb8\u6536\u96c6\u6709\u5173ClickHouse\u96c6\u7fa4\u7684\u8db3\u591f\u4fe1\u606f\u3002 \u540c\u65f6\uff0c\u4f7f\u7528\u6b64\u9891\u7387\uff0cprofiler\u4e0d\u4f1a\u5f71\u54cdClickHouse\u670d\u52a1\u5668\u7684\u6027\u80fd\u3002 \u5982\u679c\u60a8\u9700\u8981\u5206\u6790\u6bcf\u4e2a\u5355\u72ec\u7684\u67e5\u8be2\uff0c\u8bf7\u5c1d\u8bd5\u4f7f\u7528\u66f4\u9ad8\u7684\u91c7\u6837\u9891\u7387\u3002"),(0,i.kt)("p",null,"\u5206\u6790 ",(0,i.kt)("inlineCode",{parentName:"p"},"trace_log")," \u7cfb\u7edf\u8868:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-common-static-dbg")," \u5305\u3002 \u770b ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/getting-started/install#install-from-deb-packages"},"\u4eceDEB\u8f6f\u4ef6\u5305\u5b89\u88c5"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5141\u8bb8\u7531\u5185\u7701\u529f\u80fd ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/operations/settings/settings#settings-allow_introspection_functions"},"allow_introspection_functions")," \u8bbe\u7f6e\u3002"),(0,i.kt)("p",{parentName:"li"},"\u51fa\u4e8e\u5b89\u5168\u539f\u56e0\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7981\u7528\u5185\u7701\u529f\u80fd\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"addressToLine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"addressToSymbol")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"demangle")," ",(0,i.kt)("a",{parentName:"p",href:"/docs-gh-pages/up/zh/sql-reference/functions/introspection"},"\u5185\u7701\u529f\u80fd")," \u83b7\u53d6\u51fd\u6570\u540d\u79f0\u53ca\u5176\u5728ClickHouse\u4ee3\u7801\u4e2d\u7684\u4f4d\u7f6e\u3002 \u8981\u83b7\u53d6\u67d0\u4e9b\u67e5\u8be2\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u60a8\u9700\u8981\u4ece\u4ee5\u4e0b\u5185\u5bb9\u6c47\u603b\u6570\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"trace_log")," \u684c\u5b50 \u60a8\u53ef\u4ee5\u901a\u8fc7\u5355\u4e2a\u51fd\u6570\u6216\u6574\u4e2a\u5806\u6808\u8ddf\u8e2a\u805a\u5408\u6570\u636e\u3002"))),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u60f3\u8c61 ",(0,i.kt)("inlineCode",{parentName:"p"},"trace_log")," \u4fe1\u606f\uff0c\u5c1d\u8bd5 ",(0,i.kt)("a",{parentName:"p",href:"../../interfaces/third-party/gui/#clickhouse-flamegraph"},"flamegraph")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/laplab/clickhouse-speedscope"},"\u6d4b\u901f\u955c"),"."),(0,i.kt)("h2",{id:"example"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8fc7\u6ee4 ",(0,i.kt)("inlineCode",{parentName:"p"},"trace_log")," \u6570\u636e\u7531\u67e5\u8be2\u6807\u8bc6\u7b26\u548c\u5f53\u524d\u65e5\u671f\u7ec4\u6210\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5806\u6808\u8ddf\u8e2a\u805a\u5408\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5185\u7701\u529f\u80fd\uff0c\u6211\u4eec\u5c06\u5f97\u5230\u4e00\u4e2a\u62a5\u544a:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7b26\u53f7\u540d\u79f0\u548c\u76f8\u5e94\u7684\u6e90\u4ee3\u7801\u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u51fd\u6570\u7684\u6e90\u4ee3\u7801\u4f4d\u7f6e\u3002")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    count(),\n    arrayStringConcat(arrayMap(x -> concat(demangle(addressToSymbol(x)), '\\n    ', addressToLine(x)), trace), '\\n') AS sym\nFROM system.trace_log\nWHERE (query_id = 'ebca3574-ad0a-400a-9cbc-dca382f5998c') AND (event_date = today())\nGROUP BY trace\nORDER BY count() DESC\nLIMIT 10\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'{% include "examples/sampling_query_profiler_result.txt" %}\n')))}f.isMDXComponent=!0}}]);