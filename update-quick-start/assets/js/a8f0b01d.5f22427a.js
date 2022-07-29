"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1455],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=n,d=m["".concat(l,".").concat(f)]||m[f]||o[f]||s;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18642:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return o}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),i=["components"],c={sidebar_position:1,sidebar_label:"Statements"},l="ClickHouse SQL Statements",u={unversionedId:"en/sql-reference/statements/index",id:"en/sql-reference/statements/index",title:"ClickHouse SQL Statements",description:"Statements represent various kinds of action you can perform using SQL queries. Each kind of statement has it\u2019s own syntax and usage details that are described separately:",source:"@site/docs/en/sql-reference/statements/index.md",sourceDirName:"en/sql-reference/statements",slug:"/en/sql-reference/statements/",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/",draft:!1,editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Statements"},sidebar:"english",previous:{title:"SQL Reference",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference"},next:{title:"SELECT",permalink:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/select/"}},p={},o=[],m={toc:o};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"clickhouse-sql-statements"},"ClickHouse SQL Statements"),(0,s.kt)("p",null,"Statements represent various kinds of action you can perform using SQL queries. Each kind of statement has it\u2019s own syntax and usage details that are described separately:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/select/"},"SELECT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/insert-into"},"INSERT INTO")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/create/"},"CREATE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/alter/"},"ALTER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/system"},"SYSTEM")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/show"},"SHOW")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/grant"},"GRANT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/revoke"},"REVOKE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/attach"},"ATTACH")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/check-table"},"CHECK TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/describe-table"},"DESCRIBE TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/detach"},"DETACH")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/drop"},"DROP")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/exists"},"EXISTS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/kill"},"KILL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/optimize"},"OPTIMIZE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/rename"},"RENAME")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/set"},"SET")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/set-role"},"SET ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/truncate"},"TRUNCATE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/use"},"USE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs-gh-pages/update-quick-start/en/sql-reference/statements/explain"},"EXPLAIN"))))}f.isMDXComponent=!0}}]);