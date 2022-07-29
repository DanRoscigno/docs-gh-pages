"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65341],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return y}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(r),y=s,d=m["".concat(l,".").concat(y)]||m[y]||p[y]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function y(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1519:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),o=["components"],c={},l="system.asynchronous_metrics",i={unversionedId:"zh/operations/system-tables/asynchronous_metrics",id:"zh/operations/system-tables/asynchronous_metrics",title:"system.asynchronous_metrics",description:"systemtables-asynchronousmetrics}",source:"@site/docs/zh/operations/system-tables/asynchronous_metrics.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/asynchronous_metrics",permalink:"/docs-gh-pages/update-quick-start/zh/operations/system-tables/asynchronous_metrics",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/asynchronous_metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"asynchronous_metric_log",permalink:"/docs-gh-pages/update-quick-start/zh/operations/system-tables/asynchronous_metric_log"},next:{title:"system.clusters",permalink:"/docs-gh-pages/update-quick-start/zh/operations/system-tables/clusters"}},u={},p=[],m={toc:p};function y(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-asynchronous_metrics"},"system.asynchronous_metrics"),(0,a.kt)("p",null,"\u5305\u542b\u5728\u540e\u53f0\u5b9a\u671f\u8ba1\u7b97\u7684\u6307\u6807\u3002 \u4f8b\u5982\uff0c\u5728\u4f7f\u7528\u7684RAM\u91cf\u3002"),(0,a.kt)("p",null,"\u5217:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metric")," (",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u6307\u6807\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," (",(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/sql-reference/data-types/float"},"Float64"),") \u2014 \u6307\u6807\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.asynchronous_metrics LIMIT 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500metric\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500value\u2500\u2510\n\u2502 jemalloc.background_thread.run_interval \u2502          0 \u2502\n\u2502 jemalloc.background_thread.num_runs     \u2502          0 \u2502\n\u2502 jemalloc.background_thread.num_threads  \u2502          0 \u2502\n\u2502 jemalloc.retained                       \u2502  422551552 \u2502\n\u2502 jemalloc.mapped                         \u2502 1682989056 \u2502\n\u2502 jemalloc.resident                       \u2502 1656446976 \u2502\n\u2502 jemalloc.metadata_thp                   \u2502          0 \u2502\n\u2502 jemalloc.metadata                       \u2502   10226856 \u2502\n\u2502 UncompressedCacheCells                  \u2502          0 \u2502\n\u2502 MarkCacheFiles                          \u2502          0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/operations/monitoring"},"\u76d1\u63a7")," \u2014 ClickHouse\u76d1\u63a7\u7684\u57fa\u672c\u6982\u5ff5\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/operations/system-tables/metrics#system_tables-metrics"},"system.metrics")," \u2014 \u5305\u542b\u5373\u65f6\u8ba1\u7b97\u7684\u6307\u6807\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/operations/system-tables/events#system_tables-events"},"system.events")," \u2014 \u5305\u542b\u5df2\u53d1\u751f\u7684\u4e8b\u4ef6\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/zh/operations/system-tables/metric_log#system_tables-metric_log"},"system.metric_log")," \u2014 \u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"system.metrics")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"system.events")," \u8868\u4e2d\u7684\u6307\u6807\u7684\u5386\u53f2\u503c\u3002")))}y.isMDXComponent=!0}}]);