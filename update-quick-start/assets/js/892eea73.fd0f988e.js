"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[53873],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2973:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={sidebar_position:51,sidebar_label:"Quotas"},u="Quotas",l={unversionedId:"en/operations/quotas",id:"en/operations/quotas",title:"Quotas",description:"Quotas allow you to limit resource usage over a period of time or track the use of resources.",source:"@site/docs/en/operations/quotas.md",sourceDirName:"en/operations",slug:"/en/operations/quotas",permalink:"/docs-gh-pages/update-quick-start/en/operations/quotas",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/quotas.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,sidebar_label:"Quotas"},sidebar:"english",previous:{title:"Configuration Files",permalink:"/docs-gh-pages/update-quick-start/en/operations/configuration-files"},next:{title:"Settings",permalink:"/docs-gh-pages/update-quick-start/en/operations/settings/"}},c={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quotas"},"Quotas"),(0,s.kt)("p",null,"Quotas allow you to limit resource usage over a period of time or track the use of resources.\nQuotas are set up in the user config, which is usually \u2018users.xml\u2019."),(0,s.kt)("p",null,"The system also has a feature for limiting the complexity of a single query. See the section ",(0,s.kt)("a",{parentName:"p",href:"/docs-gh-pages/update-quick-start/en/operations/settings/query-complexity"},"Restrictions on query complexity"),"."),(0,s.kt)("p",null,"In contrast to query complexity restrictions, quotas:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Place restrictions on a set of queries that can be run over a period of time, instead of limiting a single query."),(0,s.kt)("li",{parentName:"ul"},"Account for resources spent on all remote servers for distributed query processing.")),(0,s.kt)("p",null,"Let\u2019s look at the section of the \u2018users.xml\u2019 file that defines quotas."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- Quotas --\x3e\n<quotas>\n    \x3c!-- Quota name. --\x3e\n    <default>\n        \x3c!-- Restrictions for a time period. You can set many intervals with different restrictions. --\x3e\n        <interval>\n            \x3c!-- Length of the interval. --\x3e\n            <duration>3600</duration>\n\n            \x3c!-- Unlimited. Just collect data for the specified time interval. --\x3e\n            <queries>0</queries>\n            <query_selects>0</query_selects>\n            <query_inserts>0</query_inserts>\n            <errors>0</errors>\n            <result_rows>0</result_rows>\n            <read_rows>0</read_rows>\n            <execution_time>0</execution_time>\n        </interval>\n    </default>\n")),(0,s.kt)("p",null,"By default, the quota tracks resource consumption for each hour, without limiting usage.\nThe resource consumption calculated for each interval is output to the server log after each request."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<statbox>\n    \x3c!-- Restrictions for a time period. You can set many intervals with different restrictions. --\x3e\n    <interval>\n        \x3c!-- Length of the interval. --\x3e\n        <duration>3600</duration>\n\n        <queries>1000</queries>\n        <query_selects>100</query_selects>\n        <query_inserts>100</query_inserts>\n        <errors>100</errors>\n        <result_rows>1000000000</result_rows>\n        <read_rows>100000000000</read_rows>\n        <execution_time>900</execution_time>\n    </interval>\n\n    <interval>\n        <duration>86400</duration>\n\n        <queries>10000</queries>\n        <query_selects>10000</query_selects>\n        <query_inserts>10000</query_inserts>\n        <errors>1000</errors>\n        <result_rows>5000000000</result_rows>\n        <read_rows>500000000000</read_rows>\n        <execution_time>7200</execution_time>\n    </interval>\n</statbox>\n")),(0,s.kt)("p",null,"For the \u2018statbox\u2019 quota, restrictions are set for every hour and for every 24 hours (86,400 seconds). The time interval is counted, starting from an implementation-defined fixed moment in time. In other words, the 24-hour interval does not necessarily begin at midnight."),(0,s.kt)("p",null,"When the interval ends, all collected values are cleared. For the next hour, the quota calculation starts over."),(0,s.kt)("p",null,"Here are the amounts that can be restricted:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"queries")," \u2013 The total number of requests."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"query_selects")," \u2013 The total number of select requests."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"query_inserts")," \u2013 The total number of insert requests."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"errors")," \u2013 The number of queries that threw an exception."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"result_rows")," \u2013 The total number of rows given as a result."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"read_rows")," \u2013 The total number of source rows read from tables for running the query on all remote servers."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"execution_time")," \u2013 The total query execution time, in seconds (wall time)."),(0,s.kt)("p",null,"If the limit is exceeded for at least one time interval, an exception is thrown with a text about which restriction was exceeded, for which interval, and when the new interval begins (when queries can be sent again)."),(0,s.kt)("p",null,"Quotas can use the \u201cquota key\u201d feature to report on resources for multiple keys independently. Here is an example of this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- For the global reports designer. --\x3e\n<web_global>\n    \x3c!-- keyed \u2013 The quota_key "key" is passed in the query parameter,\n            and the quota is tracked separately for each key value.\n        For example, you can pass a username as the key,\n            so the quota will be counted separately for each username.\n        Using keys makes sense only if quota_key is transmitted by the program, not by a user.\n\n        You can also write <keyed_by_ip />, so the IP address is used as the quota key.\n        (But keep in mind that users can change the IPv6 address fairly easily.)\n    --\x3e\n    <keyed />\n')),(0,s.kt)("p",null,"The quota is assigned to users in the \u2018users\u2019 section of the config. See the section \u201cAccess rights\u201d."),(0,s.kt)("p",null,"For distributed query processing, the accumulated amounts are stored on the requestor server. So if the user goes to another server, the quota there will \u201cstart over\u201d."),(0,s.kt)("p",null,"When the server is restarted, quotas are reset."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/quotas/"},"Original article")," "))}m.isMDXComponent=!0}}]);