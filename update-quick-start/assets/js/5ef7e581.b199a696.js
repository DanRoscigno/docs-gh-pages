"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97644],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),s=["components"],o={sidebar_label:"WITH"},i="WITH\u5b50\u53e5",c={unversionedId:"zh/sql-reference/statements/select/with",id:"zh/sql-reference/statements/select/with",title:"WITH\u5b50\u53e5",description:"with-clause}",source:"@site/docs/zh/sql-reference/statements/select/with.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/with",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/with",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/with.md",tags:[],version:"current",frontMatter:{sidebar_label:"WITH"},sidebar:"chinese",previous:{title:"WHERE",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/select/where"},next:{title:"CREATE",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/statements/create/"}},u={},p=[{value:"\u9650\u5236",id:"limitations",level:2},{value:"\u4f8b",id:"examples",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"with-clause"},"WITH\u5b50\u53e5"),(0,l.kt)("p",null,"\u672c\u8282\u63d0\u4f9b\u5bf9\u516c\u5171\u8868\u8868\u8fbe\u5f0f\u7684\u652f\u6301 (",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hierarchical_and_recursive_queries_in_SQL"},"CTE"),"\uff09\uff0c\u6240\u4ee5\u7ed3\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH")," \u5b50\u53e5\u53ef\u4ee5\u5728\u5176\u4f59\u90e8\u5206\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u3002"),(0,l.kt)("h2",{id:"limitations"},"\u9650\u5236"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u9012\u5f52\u67e5\u8be2\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u5728section\u4e2d\u4f7f\u7528\u5b50\u67e5\u8be2\u65f6\uff0c\u5b83\u7684\u7ed3\u679c\u5e94\u8be5\u662f\u53ea\u6709\u4e00\u884c\u7684\u6807\u91cf\u3002"),(0,l.kt)("li",{parentName:"ol"},"Expression\u7684\u7ed3\u679c\u5728\u5b50\u67e5\u8be2\u4e2d\u4e0d\u53ef\u7528\u3002")),(0,l.kt)("h2",{id:"examples"},"\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b1:")," \u4f7f\u7528\u5e38\u91cf\u8868\u8fbe\u5f0f\u4f5c\u4e3a \u201cvariable\u201d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WITH '2019-08-01 15:23:00' as ts_upper_bound\nSELECT *\nFROM hits\nWHERE\n    EventDate = toDate(ts_upper_bound) AND\n    EventTime <= ts_upper_bound\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b2:")," \u4eceSELECT\u5b50\u53e5\u5217\u8868\u4e2d\u9010\u51fasum(bytes)\u8868\u8fbe\u5f0f\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WITH sum(bytes) as s\nSELECT\n    formatReadableSize(s),\n    table\nFROM system.parts\nGROUP BY table\nORDER BY s\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b3:")," \u4f7f\u7528\u6807\u91cf\u5b50\u67e5\u8be2\u7684\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"/* this example would return TOP 10 of most huge tables */\nWITH\n    (\n        SELECT sum(bytes)\n        FROM system.parts\n        WHERE active\n    ) AS total_disk_usage\nSELECT\n    (sum(bytes) / total_disk_usage) * 100 AS table_disk_usage,\n    table\nFROM system.parts\nGROUP BY table\nORDER BY table_disk_usage DESC\nLIMIT 10\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b4:")," \u5728\u5b50\u67e5\u8be2\u4e2d\u91cd\u7528\u8868\u8fbe\u5f0f"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u5b50\u67e5\u8be2\u4e2d\u8868\u8fbe\u5f0f\u4f7f\u7528\u7684\u5f53\u524d\u9650\u5236\u7684\u89e3\u51b3\u65b9\u6cd5\uff0c\u60a8\u53ef\u4ee5\u590d\u5236\u5b83\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WITH ['hello'] AS hello\nSELECT\n    hello,\n    *\nFROM\n(\n    WITH ['hello'] AS hello\n    SELECT hello\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hello\u2500\u2500\u2500\u2500\u2500\u252c\u2500hello\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['hello'] \u2502 ['hello'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);