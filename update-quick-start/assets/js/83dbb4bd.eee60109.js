"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49555],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=i(t),f=o,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||u;return t?r.createElement(b,a(a({ref:n},l),{},{components:t})):r.createElement(b,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=t.length,a=new Array(u);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<u;i++)a[i]=t[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9919:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var r=t(87462),o=t(63366),u=(t(67294),t(3905)),a=["components"],s={sidebar_position:39,sidebar_label:"numbers"},c="numbers",i={unversionedId:"zh/sql-reference/table-functions/numbers",id:"zh/sql-reference/table-functions/numbers",title:"numbers",description:"numbers}",source:"@site/docs/zh/sql-reference/table-functions/numbers.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/numbers",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/table-functions/numbers",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/numbers.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"numbers"},sidebar:"chinese",previous:{title:"merge",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/table-functions/merge"},next:{title:"url",permalink:"/docs-gh-pages/update-quick-start/zh/sql-reference/table-functions/url"}},l={},p=[],m={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"numbers"},"numbers"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"numbers(N)")," \u2013 \u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u5355\u4e2a \u2018number\u2019 \u5217(UInt64)\u7684\u8868\uff0c\u5176\u4e2d\u5305\u542b\u4ece0\u5230N-1\u7684\u6574\u6570\u3002\n",(0,u.kt)("inlineCode",{parentName:"p"},"numbers(N, M)")," - \u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u5355\u4e2a \u2018number\u2019 \u5217(UInt64)\u7684\u8868\uff0c\u5176\u4e2d\u5305\u542b\u4eceN\u5230(N+M-1)\u7684\u6574\u6570\u3002"),(0,u.kt)("p",null,"\u7c7b\u4f3c\u4e8e ",(0,u.kt)("inlineCode",{parentName:"p"},"system.numbers")," \u8868\uff0c\u5b83\u53ef\u4ee5\u7528\u4e8e\u6d4b\u8bd5\u548c\u751f\u6210\u8fde\u7eed\u7684\u503c, ",(0,u.kt)("inlineCode",{parentName:"p"},"numbers(N, M)")," \u6bd4 ",(0,u.kt)("inlineCode",{parentName:"p"},"system.numbers"),"\u66f4\u6709\u6548\u3002"),(0,u.kt)("p",null,"\u4ee5\u4e0b\u67e5\u8be2\u662f\u7b49\u4ef7\u7684:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM numbers(10);\nSELECT * FROM numbers(0, 10);\nSELECT * FROM system.numbers LIMIT 10;\n")),(0,u.kt)("p",null,"\u793a\u4f8b:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u751f\u62102010-01-01\u81f32010-12-31\u7684\u65e5\u671f\u5e8f\u5217\nselect toDate('2010-01-01') + number as d FROM numbers(365);\n")),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/numbers/"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);