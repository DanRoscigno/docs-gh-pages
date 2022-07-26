"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10330],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,g=m["".concat(i,".").concat(f)]||m[f]||l[f]||s;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return l}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),o=["components"],u={sidebar_position:141},i="sumMap",p={unversionedId:"en/sql-reference/aggregate-functions/reference/summap",id:"en/sql-reference/aggregate-functions/reference/summap",title:"sumMap",description:"Syntax: sumMap(key, value) or sumMap(Tuple(key, value))",source:"@site/docs/en/sql-reference/aggregate-functions/reference/summap.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/summap",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/summap",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/aggregate-functions/reference/summap.md",tags:[],version:"current",sidebarPosition:141,frontMatter:{sidebar_position:141},sidebar:"english",previous:{title:"deltaSumTimestamp",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/deltasumtimestamp"},next:{title:"minMap",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/aggregate-functions/reference/minmap"}},c={},l=[],m={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"summap"},"sumMap"),(0,s.kt)("p",null,"Syntax: ",(0,s.kt)("inlineCode",{parentName:"p"},"sumMap(key, value)")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"sumMap(Tuple(key, value))")),(0,s.kt)("p",null,"Totals the ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," array according to the keys specified in the ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," array."),(0,s.kt)("p",null,"Passing tuple of keys and values arrays is a synonym to passing two arrays of keys and values."),(0,s.kt)("p",null,"The number of elements in ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"value")," must be the same for each row that is totaled."),(0,s.kt)("p",null,"Returns a tuple of two arrays: keys in sorted order, and values \u200b\u200bsummed for the corresponding keys."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE sum_map(\n    date Date,\n    timeslot DateTime,\n    statusMap Nested(\n        status UInt16,\n        requests UInt64\n    ),\n    statusMapTuple Tuple(Array(Int32), Array(Int32))\n) ENGINE = Log;\nINSERT INTO sum_map VALUES\n    ('2000-01-01', '2000-01-01 00:00:00', [1, 2, 3], [10, 10, 10], ([1, 2, 3], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:00:00', [3, 4, 5], [10, 10, 10], ([3, 4, 5], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [4, 5, 6], [10, 10, 10], ([4, 5, 6], [10, 10, 10])),\n    ('2000-01-01', '2000-01-01 00:01:00', [6, 7, 8], [10, 10, 10], ([6, 7, 8], [10, 10, 10]));\n\nSELECT\n    timeslot,\n    sumMap(statusMap.status, statusMap.requests),\n    sumMap(statusMapTuple)\nFROM sum_map\nGROUP BY timeslot\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timeslot\u2500\u252c\u2500sumMap(statusMap.status, statusMap.requests)\u2500\u252c\u2500sumMap(statusMapTuple)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2000-01-01 00:00:00 \u2502 ([1,2,3,4,5],[10,10,20,10,10])               \u2502 ([1,2,3,4,5],[10,10,20,10,10]) \u2502\n\u2502 2000-01-01 00:01:00 \u2502 ([4,5,6,7,8],[10,10,20,10,10])               \u2502 ([4,5,6,7,8],[10,10,20,10,10]) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);