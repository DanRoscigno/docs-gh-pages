"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73032],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(t),f=a,g=m["".concat(p,".").concat(f)]||m[f]||l[f]||s;return t?r.createElement(g,u(u({ref:n},c),{},{components:t})):r.createElement(g,u({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,u=new Array(s);u[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var i=2;i<s;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37701:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var r=t(87462),a=t(63366),s=(t(67294),t(3905)),u=["components"],o={sidebar_position:141},p="sumMap",i={unversionedId:"zh/sql-reference/aggregate-functions/reference/summap",id:"zh/sql-reference/aggregate-functions/reference/summap",title:"sumMap",description:"agg_functions-summap}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/summap.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/summap",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/summap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/summap.md",tags:[],version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141},sidebar:"chinese",previous:{title:"deltaSumTimestamp",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/deltasumtimestamp"},next:{title:"minMap",permalink:"/docs-gh-pages/nytaxi/zh/sql-reference/aggregate-functions/reference/minmap"}},c={},l=[],m={toc:l};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,s.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"agg_functions-summap"},"sumMap"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"sumMap(key, value)\n\u6216\nsumMap(Tuple(key, value))\n")),(0,s.kt)("p",null,"\u6839\u636e ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," \u6570\u7ec4\u4e2d\u6307\u5b9a\u7684\u952e\u5bf9 ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," \u6570\u7ec4\u8fdb\u884c\u6c42\u548c\u3002"),(0,s.kt)("p",null,"\u4f20\u9012 ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," \u6570\u7ec4\u7684\u5143\u7ec4\u4e0e\u4f20\u9012 ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," \u7684\u4e24\u4e2a\u6570\u7ec4\u662f\u540c\u4e49\u7684\u3002\n\u8981\u603b\u8ba1\u7684\u6bcf\u4e00\u884c\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," (\u6570\u7ec4)\u5143\u7d20\u7684\u6570\u91cf\u5fc5\u987b\u76f8\u540c\u3002\n\u8fd4\u56de\u4e24\u4e2a\u6570\u7ec4\u7ec4\u6210\u7684\u4e00\u4e2a\u5143\u7ec4: \u6392\u597d\u5e8f\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," \u548c\u5bf9\u5e94 ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," \u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," \u4e4b\u548c\u3002"),(0,s.kt)("p",null,"\u793a\u4f8b:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sum_map(\n    date Date,\n    timeslot DateTime,\n    statusMap Nested(\n        status UInt16,\n        requests UInt64\n    ),\n    statusMapTuple Tuple(Array(Int32), Array(Int32))\n) ENGINE = Log;\nINSERT INTO sum_map VALUES\n    ('2000-01-01', '2000-01-01 00:00:00', [1, 2, 3], [10, 10, 10], ([1, 2, 3], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:00:00', [3, 4, 5], [10, 10, 10], ([3, 4, 5], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [4, 5, 6], [10, 10, 10], ([4, 5, 6], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [6, 7, 8], [10, 10, 10], ([6, 7, 8], [10, 10, 10]));\n\nSELECT\n    timeslot,\n    sumMap(statusMap.status, statusMap.requests),\n    sumMap(statusMapTuple)\nFROM sum_map\nGROUP BY timeslot\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timeslot\u2500\u252c\u2500sumMap(statusMap.status, statusMap.requests)\u2500\u252c\u2500sumMap(statusMapTuple)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2000-01-01 00:00:00 \u2502 ([1,2,3,4,5],[10,10,20,10,10])               \u2502 ([1,2,3,4,5],[10,10,20,10,10]) \u2502\n\u2502 2000-01-01 00:01:00 \u2502 ([4,5,6,7,8],[10,10,20,10,10])               \u2502 ([4,5,6,7,8],[10,10,20,10,10]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);