"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[13701],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return y}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),y=r,f=m["".concat(o,".").concat(y)]||m[y]||c[y]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65258:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={},o="system.quota_limits",p={unversionedId:"zh/operations/system-tables/quota_limits",id:"zh/operations/system-tables/quota_limits",title:"system.quota_limits",description:"systemtables-quotalimits}",source:"@site/docs/zh/operations/system-tables/quota_limits.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/quota_limits",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/quota_limits",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/quota_limits.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.query_views_log",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/query_views_log"},next:{title:"system.quota_usage",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/quota_usage"}},u={},c=[],m={toc:c};function y(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"system_tables-quota_limits"},"system.quota_limits"),(0,l.kt)("p",null,"\u5305\u542b\u5173\u4e8e\u6240\u6709\u914d\u989d\u7684\u6240\u6709\u95f4\u9694\u7684\u6700\u5927\u503c\u7684\u4fe1\u606f. \u4efb\u4f55\u884c\u6570\u62160\u884c\u90fd\u53ef\u4ee5\u5bf9\u5e94\u4e00\u4e2a\u914d\u989d."),(0,l.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/string"},"String"),") \u2014 \u914d\u989d\u540d\u79f0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u8ba1\u7b97\u8d44\u6e90\u6d88\u8017\u7684\u65f6\u95f4\u95f4\u9694\u957f\u5ea6\uff0c\u5355\u4f4d\u4e3a\u79d2."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_randomized_interval")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u903b\u8f91\u503c. \u5b83\u663e\u793a\u4e86\u95f4\u9694\u662f\u5426\u662f\u968f\u673a\u7684. \u5982\u679c\u95f4\u9694\u4e0d\u662f\u968f\u673a\u7684, \u5b83\u603b\u662f\u5728\u540c\u4e00\u65f6\u95f4\u5f00\u59cb. \u4f8b\u5982, 1 \u5206\u949f\u7684\u95f4\u9694\u603b\u662f\u4ece\u6574\u6570\u5206\u949f\u5f00\u59cb(\u5373\u5b83\u53ef\u4ee5\u4ece 11:20:00 \u5f00\u59cb, \u4f46\u5b83\u6c38\u8fdc\u4e0d\u4f1a\u4ece 11:20:01 \u5f00\u59cb), \u4e00\u5929\u7684\u95f4\u9694\u603b\u662f\u4ece UTC \u5348\u591c\u5f00\u59cb. \u5982\u679c\u95f4\u9694\u662f\u968f\u673a\u7684, \u5219\u7b2c\u4e00\u4e2a\u95f4\u9694\u5728\u968f\u673a\u65f6\u95f4\u5f00\u59cb, \u968f\u540e\u7684\u95f4\u9694\u4e00\u4e2a\u63a5\u4e00\u4e2a\u5f00\u59cb. \u503c:"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u533a\u95f4\u4e0d\u662f\u968f\u673a\u7684."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u533a\u95f4\u662f\u968f\u673a\u7684."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u67e5\u8be2\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_query_selects")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 select \u6700\u5927\u67e5\u8be2\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_query_inserts")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 insert \u6700\u5927\u67e5\u8be2\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u9519\u8bef\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u6700\u5927\u7ed3\u679c\u884c\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u7528\u4e8e\u5b58\u50a8\u67e5\u8be2\u7ed3\u679c\u7684\u6700\u5927RAM\u5bb9\u91cf(\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u4ece\u53c2\u4e0e\u67e5\u8be2\u7684\u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u4e2d\u8bfb\u53d6\u7684\u6700\u5927\u884c\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 \u4ece\u53c2\u4e0e\u67e5\u8be2\u7684\u6240\u6709\u8868\u548c\u8868\u51fd\u6570\u4e2d\u8bfb\u53d6\u7684\u6700\u5927\u5b57\u8282\u6570."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/sql-reference/data-types/float"},"Float64"),")) \u2014 \u67e5\u8be2\u6267\u884c\u65f6\u95f4\u7684\u6700\u5927\u503c, \u5355\u4f4d\u4e3a\u79d2.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/quota_limits"},"\u539f\u59cb\u6587\u7ae0")," "))}y.isMDXComponent=!0}}]);