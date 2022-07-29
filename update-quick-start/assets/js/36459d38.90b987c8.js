"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41992],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95534:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),s=["components"],l={},o="quota_limits",u={unversionedId:"en/operations/system-tables/quota_limits",id:"en/operations/system-tables/quota_limits",title:"quota_limits",description:"Contains information about maximums for all intervals of all quotas. Any number of rows or zero can correspond to one quota.",source:"@site/docs/en/operations/system-tables/quota_limits.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/quota_limits",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/quota_limits",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/quota_limits.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"query_views_log",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/query_views_log"},next:{title:"quota_usage",permalink:"/docs-gh-pages/update-quick-start/en/operations/system-tables/quota_usage"}},p={},c=[],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quota_limits"},"quota_limits"),(0,i.kt)("p",null,"Contains information about maximums for all intervals of all quotas. Any number of rows or zero can correspond to one quota."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/string"},"String"),") \u2014 Quota name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Length of the time interval for calculating resource consumption, in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_randomized_interval")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Logical value. It shows whether the interval is randomized. Interval always starts at the same time if it is not randomized. For example, an interval of 1 minute always starts at an integer number of minutes (i.e.\xa0it can start at 11:20:00, but it never starts at 11:20:01), an interval of one day always starts at midnight UTC. If interval is randomized, the very first interval starts at random time, and subsequent intervals starts one by one. Values:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," \u2014 Interval is not randomized."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," \u2014 Interval is randomized."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_query_selects")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of select queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_query_inserts")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of insert queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of errors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of result rows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of RAM volume in bytes used to store a queries result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of rows read from all tables and table functions participated in queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of bytes read from all tables and table functions participated in queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/data-types/float"},"Float64"),")) \u2014 Maximum of the query execution time, in seconds.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/quota_limits"},"Original article")," "))}d.isMDXComponent=!0}}]);