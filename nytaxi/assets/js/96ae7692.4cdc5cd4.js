"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22475],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,b=p["".concat(u,".").concat(f)]||p[f]||m[f]||a;return t?r.createElement(b,s(s({ref:n},l),{},{components:t})):r.createElement(b,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},66929:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return m}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={sidebar_position:39,sidebar_label:"numbers"},u="numbers",c={unversionedId:"en/sql-reference/table-functions/numbers",id:"en/sql-reference/table-functions/numbers",title:"numbers",description:"numbers(N) \u2013 Returns a table with the single \u2018number\u2019 column (UInt64) that contains integers from 0 to N-1.",source:"@site/docs/en/sql-reference/table-functions/numbers.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/numbers",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/numbers",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/table-functions/numbers.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"numbers"},sidebar:"english",previous:{title:"merge",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/merge"},next:{title:"remote",permalink:"/docs-gh-pages/nytaxi/en/sql-reference/table-functions/remote"}},l={},m=[],p={toc:m};function f(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"numbers"},"numbers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"numbers(N)")," \u2013 Returns a table with the single \u2018number\u2019 column (UInt64) that contains integers from 0 to N-1.\n",(0,a.kt)("inlineCode",{parentName:"p"},"numbers(N, M)")," - Returns a table with the single \u2018number\u2019 column (UInt64) that contains integers from N to (N + M - 1)."),(0,a.kt)("p",null,"Similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"system.numbers")," table, it can be used for testing and generating successive values, ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers(N, M)")," more efficient than ",(0,a.kt)("inlineCode",{parentName:"p"},"system.numbers"),"."),(0,a.kt)("p",null,"The following queries are equivalent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM numbers(10);\nSELECT * FROM numbers(0, 10);\nSELECT * FROM system.numbers LIMIT 10;\n")),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- Generate a sequence of dates from 2010-01-01 to 2010-12-31\nselect toDate('2010-01-01') + number as d FROM numbers(365);\n")))}f.isMDXComponent=!0}}]);