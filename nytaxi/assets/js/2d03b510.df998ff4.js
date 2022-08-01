"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87126],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43491:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={},l="system.clusters",p={unversionedId:"zh/operations/system-tables/clusters",id:"zh/operations/system-tables/clusters",title:"system.clusters",description:"system-clusters}",source:"@site/docs/zh/operations/system-tables/clusters.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/clusters",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/clusters",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/clusters.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.asynchronous_metrics",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/asynchronous_metrics"},next:{title:"system.columns",permalink:"/docs-gh-pages/nytaxi/zh/operations/system-tables/columns"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-clusters"},"system.clusters"),(0,i.kt)("p",null,"\u5305\u542b\u6709\u5173\u914d\u7f6e\u6587\u4ef6\u4e2d\u53ef\u7528\u7684\u96c6\u7fa4\u53ca\u5176\u4e2d\u7684\u670d\u52a1\u5668\u7684\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster")," (String) \u2014 \u96c6\u7fa4\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shard_num")," (UInt32) \u2014 \u96c6\u7fa4\u4e2d\u7684\u5206\u7247\u6570\uff0c\u4ece1\u5f00\u59cb\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"shard_weight")," (UInt32) \u2014 \u5199\u6570\u636e\u65f6\u8be5\u5206\u7247\u7684\u76f8\u5bf9\u6743\u91cd\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replica_num")," (UInt32) \u2014 \u5206\u7247\u7684\u526f\u672c\u6570\u91cf\uff0c\u4ece1\u5f00\u59cb\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_name")," (String) \u2014 \u914d\u7f6e\u4e2d\u6307\u5b9a\u7684\u4e3b\u673a\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_address")," (String) \u2014 \u4eceDNS\u83b7\u53d6\u7684\u4e3b\u673aIP\u5730\u5740\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (UInt16) \u2014 \u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u7aef\u53e3\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," (String) \u2014 \u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u7528\u6237\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errors_count")," (UInt32) - \u6b64\u4e3b\u673a\u65e0\u6cd5\u8bbf\u95ee\u526f\u672c\u7684\u6b21\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"slowdowns_count")," (UInt32) - \u4e0e\u5bf9\u51b2\u8bf7\u6c42\u5efa\u7acb\u8fde\u63a5\u65f6\u5bfc\u81f4\u66f4\u6539\u526f\u672c\u7684\u51cf\u901f\u6b21\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"estimated_recovery_time")," (UInt32) - \u5269\u4e0b\u7684\u79d2\u6570\uff0c\u76f4\u5230\u526f\u672c\u9519\u8bef\u8ba1\u6570\u5f52\u96f6\u5e76\u88ab\u89c6\u4e3a\u6062\u590d\u6b63\u5e38\u3002")),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f ",(0,i.kt)("inlineCode",{parentName:"p"},"errors_count")," \u6bcf\u4e2a\u67e5\u8be2\u96c6\u7fa4\u66f4\u65b0\u4e00\u6b21\uff0c\u4f46 ",(0,i.kt)("inlineCode",{parentName:"p"},"estimated_recovery_time")," \u6309\u9700\u91cd\u65b0\u8ba1\u7b97\u3002 \u6240\u4ee5\u6709\u53ef\u80fd\u662f\u975e\u96f6\u7684\u60c5\u51b5 ",(0,i.kt)("inlineCode",{parentName:"p"},"errors_count")," \u548c\u96f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"estimated_recovery_time"),"\uff0c\u4e0b\u4e00\u4e2a\u67e5\u8be2\u5c06\u4e3a\u96f6 ",(0,i.kt)("inlineCode",{parentName:"p"},"errors_count")," \u5e76\u5c1d\u8bd5\u4f7f\u7528\u526f\u672c\uff0c\u5c31\u597d\u50cf\u5b83\u6ca1\u6709\u9519\u8bef\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/engines/table-engines/special/distributed"},"\u8868\u5f15\u64ce\u5206\u5e03\u5f0f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#settings-distributed_replica_error_cap"},"distributed_replica_error_cap\u8bbe\u7f6e")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs-gh-pages/nytaxi/zh/operations/settings/settings#settings-distributed_replica_error_half_life"},"distributed_replica_error_half_life\u8bbe\u7f6e"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/clusters"},"\u539f\u6587")," "))}d.isMDXComponent=!0}}]);