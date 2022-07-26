"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98028],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53e3:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(87462),s=r(63366),o=(r(67294),r(3905)),a=["components"],i={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},l="\u7cfb\u7edf\u3002\u6d41\u7a0b",c={unversionedId:"zh/operations/system-tables/processes",id:"zh/operations/system-tables/processes",title:"\u7cfb\u7edf\u3002\u6d41\u7a0b",description:"system_tables-processes}",source:"@site/docs/zh/operations/system-tables/processes.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/processes",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/processes",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/processes.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.parts_columns",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/parts_columns"},next:{title:"system.query_log",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/query_log"}},u={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system_tables-processes"},"\u7cfb\u7edf\u3002\u6d41\u7a0b"),(0,o.kt)("p",null,"\u8be5\u7cfb\u7edf\u8868\u7528\u4e8e\u5b9e\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"SHOW PROCESSLIST")," \u67e5\u8be2\u3002"),(0,o.kt)("p",null,"\u5217:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"user")," (String) \u2013 The user who made the query. Keep in mind that for distributed processing, queries are sent to remote servers under the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," \u7528\u6237\u3002 \u8be5\u5b57\u6bb5\u5305\u542b\u7279\u5b9a\u67e5\u8be2\u7684\u7528\u6237\u540d\uff0c\u800c\u4e0d\u662f\u6b64\u67e5\u8be2\u542f\u52a8\u7684\u67e5\u8be2\u7684\u7528\u6237\u540d\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"address")," (String) \u2013 The IP address the request was made from. The same for distributed processing. To track where a distributed query was originally made from, look at ",(0,o.kt)("inlineCode",{parentName:"li"},"system.processes")," \u67e5\u8be2\u8bf7\u6c42\u8005\u670d\u52a1\u5668\u4e0a\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"elapsed")," (Float64) \u2013 The time in seconds since request execution started."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rows_read")," (UInt64) \u2013 The number of rows read from the table. For distributed processing, on the requestor server, this is the total for all remote servers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bytes_read")," (UInt64) \u2013 The number of uncompressed bytes read from the table. For distributed processing, on the requestor server, this is the total for all remote servers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"total_rows_approx")," (UInt64) \u2013 The approximation of the total number of rows that should be read. For distributed processing, on the requestor server, this is the total for all remote servers. It can be updated during request processing, when new sources to process become known."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memory_usage")," (UInt64) \u2013 Amount of RAM the request uses. It might not include some types of dedicated memory. See the ",(0,o.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/query-complexity#settings_max_memory_usage"},"max_memory_usage")," \u8bbe\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query")," (String) \u2013 The query text. For ",(0,o.kt)("inlineCode",{parentName:"li"},"INSERT"),"\uff0c\u5b83\u4e0d\u5305\u62ec\u8981\u63d2\u5165\u7684\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query_id")," (String) \u2013 Query ID, if defined.")))}d.isMDXComponent=!0}}]);